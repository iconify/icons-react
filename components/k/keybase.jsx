import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueeme-8el.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueeme-8el"/>`,
		"fallback": "thesvg:keybase",
	});
}

export default Component;
