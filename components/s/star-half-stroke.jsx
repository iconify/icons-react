import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxxgum2ag.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxxgum2ag"/>`,
		"fallback": "fa6-solid:star-half-stroke",
	});
}

export default Component;
