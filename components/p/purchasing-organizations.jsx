import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6fj7fx9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6fj7fx9j"/>`,
		"fallback": "carbon:purchasing-organizations",
	});
}

export default Component;
