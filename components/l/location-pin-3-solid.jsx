import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ug0slubhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ug0slubhn"/>`,
		"fallback": "streamline-sharp:location-pin-3-solid",
	});
}

export default Component;
