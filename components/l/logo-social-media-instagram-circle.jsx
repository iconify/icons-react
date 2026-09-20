import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl5tuzctx.css';
import '../../css/w/wikzv70fk.css';
import '../../css/i/i-w85obzz.css';
import '../../css/k/krmn1jcix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl5tuzctx"/><path class="wikzv70fk"/><path class="i-w85obzz"/><path class="krmn1jcix"/>`,
		"fallback": "streamline-pixel:logo-social-media-instagram-circle",
	});
}

export default Component;
