import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpzclwb5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpzclwb5j"/>`,
		"fallback": "fluent-emoji-high-contrast:thumbs-down",
	});
}

export default Component;
