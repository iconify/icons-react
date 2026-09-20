import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzmes-lrp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzmes-lrp"/>`,
		"fallback": "streamline:warning-octagon-remix",
	});
}

export default Component;
