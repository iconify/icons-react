import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwbzpyb5i.css';
import '../../css/p/pr_1mzb5o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwbzpyb5i"/><circle class="pr_1mzb5o"/>`,
		"fallback": "carbon:password",
	});
}

export default Component;
