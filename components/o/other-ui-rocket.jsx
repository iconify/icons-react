import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm8yzh27k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gm8yzh27k"/>`,
		"fallback": "streamline-block:other-ui-rocket",
	});
}

export default Component;
