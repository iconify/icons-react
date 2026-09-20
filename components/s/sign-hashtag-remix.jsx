import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts-tg8jhn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ts-tg8jhn"/>`,
		"fallback": "streamline:sign-hashtag-remix",
	});
}

export default Component;
