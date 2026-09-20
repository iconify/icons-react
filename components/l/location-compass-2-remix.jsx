import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z58vj_vfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z58vj_vfb"/>`,
		"fallback": "streamline-sharp:location-compass-2-remix",
	});
}

export default Component;
