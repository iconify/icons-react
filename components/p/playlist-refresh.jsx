import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzv-gcbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzv-gcbon"/>`,
		"fallback": "noviair:playlist-refresh",
	});
}

export default Component;
