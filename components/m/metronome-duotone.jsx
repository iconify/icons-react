import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kne3ydb-n.css';
import '../../css/o/o95yfab-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kne3ydb-n"/><path class="o95yfab-r"/></g>`,
		"fallback": "lucide-extended:metronome-duotone",
	});
}

export default Component;
