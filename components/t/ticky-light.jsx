import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-4uxpbxq.css';
import '../../css/c/cjzwyi8ka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-4uxpbxq"/><path class="cjzwyi8ka"/>`,
		"fallback": "selfhst:ticky-light",
	});
}

export default Component;
