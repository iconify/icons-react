import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdd20qqvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdd20qqvx"/>`,
		"fallback": "tdesign:map-ruler-filled",
	});
}

export default Component;
