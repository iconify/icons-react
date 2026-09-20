import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thcb1pb4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thcb1pb4j"/>`,
		"fallback": "tdesign:tablet-filled",
	});
}

export default Component;
