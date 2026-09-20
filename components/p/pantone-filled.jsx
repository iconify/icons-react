import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqmj2n7us.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqmj2n7us"/>`,
		"fallback": "tdesign:pantone-filled",
	});
}

export default Component;
