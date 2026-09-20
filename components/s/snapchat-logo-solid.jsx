import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-omnkb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-omnkb2b"/>`,
		"fallback": "streamline-logos:snapchat-logo-solid",
	});
}

export default Component;
