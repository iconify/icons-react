import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl_f1i0nt.css';
import '../../css/c/cr_3gebps.css';
import '../../css/z/z7zq9ab0q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl_f1i0nt"/><path class="cr_3gebps"/><path class="z7zq9ab0q"/>`,
		"fallback": "energy-icons:steel-mill-20",
	});
}

export default Component;
