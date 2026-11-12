import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-4uxpbxq.css';
import '../../css/r/rh7zq0bch.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-4uxpbxq"/><path class="rh7zq0bch"/>`,
		"fallback": "selfhst:ticky-light",
	});
}

export default Component;
