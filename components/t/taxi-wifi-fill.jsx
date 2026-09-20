import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4c_pcbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4c_pcbxg"/>`,
		"fallback": "ri:taxi-wifi-fill",
	});
}

export default Component;
