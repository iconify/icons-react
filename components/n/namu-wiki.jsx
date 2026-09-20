import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mugft_z1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mugft_z1j"/>`,
		"fallback": "thesvg-color:namu-wiki",
	});
}

export default Component;
