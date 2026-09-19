import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqcj7x-iu.css';
import '../../css/z/zgszk2b4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqcj7x-iu"/><path class="zgszk2b4j"/>`,
		"fallback": "carbon:play-filled",
	});
}

export default Component;
