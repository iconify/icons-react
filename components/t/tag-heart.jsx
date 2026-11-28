import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spc51xbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spc51xbzp"/>`,
		"fallback": "noviair-light:tag-heart",
	});
}

export default Component;
