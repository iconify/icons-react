import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0qad_bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0qad_bju"/>`,
		"fallback": "iconoir:sine-wave",
	});
}

export default Component;
