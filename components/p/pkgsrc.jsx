import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn86bubkc.css';

const viewBox = {"width":487,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn86bubkc"/>`,
		"fallback": "file-icons:pkgsrc",
	});
}

export default Component;
