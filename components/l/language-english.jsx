import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdn5_zp5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdn5_zp5j"/>`,
		"fallback": "griddy-icons:language-english",
	});
}

export default Component;
