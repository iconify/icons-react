import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjsut2bzf.css';
import '../../css/x/x8-n8yhcy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjsut2bzf"/><path class="x8-n8yhcy"/>`,
		"fallback": "streamline-pixel:logo-social-media-youtube",
	});
}

export default Component;
