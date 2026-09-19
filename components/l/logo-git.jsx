import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjv3tcbah.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjv3tcbah"/>`,
		"fallback": "carbon:logo-git",
	});
}

export default Component;
