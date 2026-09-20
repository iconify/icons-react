import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx3xu4_0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yx3xu4_0x"/>`,
		"fallback": "reicon:search-bug2",
	});
}

export default Component;
