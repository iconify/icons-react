import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_85a_4sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_85a_4sf"/>`,
		"fallback": "hugeicons:three-finger-01",
	});
}

export default Component;
