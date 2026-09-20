import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh4fvekho.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh4fvekho"/>`,
		"fallback": "octicon:paperclip-16",
	});
}

export default Component;
