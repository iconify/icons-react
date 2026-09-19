import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1av9qnsd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1av9qnsd"/>`,
		"fallback": "fluent-mdl2:voicemail-i-r-m",
	});
}

export default Component;
