import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my5n0s3xg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my5n0s3xg"/>`,
		"fallback": "carbon:interface-definition-alt",
	});
}

export default Component;
