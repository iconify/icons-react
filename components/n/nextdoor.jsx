import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx_b24njl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx_b24njl"/>`,
		"fallback": "thesvg-color:nextdoor",
	});
}

export default Component;
