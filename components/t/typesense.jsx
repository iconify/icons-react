import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yabvmqbqf.css';

const viewBox = {"width":256,"height":255};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yabvmqbqf"/>`,
		"fallback": "thesvg-color:typesense",
	});
}

export default Component;
