import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnbud8kdw.css';
import '../../css/o/olsqdun8e.css';
import '../../css/y/yl8pc3bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hnbud8kdw"/><path class="olsqdun8e"/><path class="yl8pc3bzh"/></g>`,
		"fallback": "lucide-extended:printer-duotone",
	});
}

export default Component;
