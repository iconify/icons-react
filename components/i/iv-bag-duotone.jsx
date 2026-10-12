import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ccn4zactj.css';
import '../../css/b/bhk8wfb4o.css';
import '../../css/c/cb49zqzuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ccn4zactj"/><path class="bhk8wfb4o"/><path class="cb49zqzuj"/></g>`,
		"fallback": "lucide-extended:iv-bag-duotone",
	});
}

export default Component;
