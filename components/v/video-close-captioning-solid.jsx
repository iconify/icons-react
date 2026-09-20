import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im2df2dro.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="im2df2dro"/>`,
		"fallback": "streamline-flex:video-close-captioning-solid",
	});
}

export default Component;
