import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afr4k7jkh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="afr4k7jkh"/>`,
		"fallback": "streamline-color:sign-hashtag-flat",
	});
}

export default Component;
