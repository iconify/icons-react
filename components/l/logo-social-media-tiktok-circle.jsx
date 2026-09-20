import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87b65bny.css';
import '../../css/t/t8sx1mbrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87b65bny"/><path class="t8sx1mbrx"/>`,
		"fallback": "streamline-pixel:logo-social-media-tiktok-circle",
	});
}

export default Component;
