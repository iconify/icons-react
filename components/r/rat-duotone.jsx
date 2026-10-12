import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7duswb0q.css';
import '../../css/g/g9862dbbu.css';
import '../../css/z/zxew78tvc.css';
import '../../css/r/rlshfrp2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7duswb0q"/><path class="g9862dbbu"/><path class="zxew78tvc"/><path class="rlshfrp2q"/></g>`,
		"fallback": "lucide-extended:rat-duotone",
	});
}

export default Component;
