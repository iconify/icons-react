import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auwx0p0zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auwx0p0zb"/>`,
		"fallback": "tdesign:serenity-filled",
	});
}

export default Component;
