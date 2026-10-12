import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x7a_enb4j.css';
import '../../css/g/gvf974yhc.css';
import '../../css/r/ru5z24bqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x7a_enb4j"/><path clip-rule="evenodd" class="gvf974yhc"/><path class="ru5z24bqz"/></g>`,
		"fallback": "lucide-extended:monitor-stop-duotone",
	});
}

export default Component;
