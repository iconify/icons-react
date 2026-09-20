import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_zq91b7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_zq91b7t"/>`,
		"fallback": "tdesign:router-wave-filled",
	});
}

export default Component;
