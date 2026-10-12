import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqaer8bbt.css';
import '../../css/x/x2qno78eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zqaer8bbt"/><path class="x2qno78eg"/></g>`,
		"fallback": "lucide-extended:paw-print-duotone",
	});
}

export default Component;
