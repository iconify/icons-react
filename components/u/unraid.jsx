import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6b8rw7da.css';
import '../../css/v/v6i8d8bmx.css';
import '../../css/j/jk3br8gfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGwAGUUFca" x1="91.05" x2="420.95" y1="698.55" y2="368.65" gradientTransform="translate(0 -277.8)" gradientUnits="userSpaceOnUse"><stop offset="0" class="m6b8rw7da"/><stop offset="1" class="v6i8d8bmx"/></linearGradient><path fill="url(#SVGwAGUUFca)" class="jk3br8gfw"/>`,
		"fallback": "selfhst:unraid",
	});
}

export default Component;
