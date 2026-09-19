import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccqy6rbku.css';
import '../../css/v/vvwnsy9um.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ccqy6rbku"/><path class="vvwnsy9um"/>`,
		"fallback": "carbon:visual-recognition",
	});
}

export default Component;
