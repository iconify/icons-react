import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj_r54n6x.css';
import '../../css/k/kuf42lb8e.css';
import '../../css/j/j455nerhl.css';
import '../../css/m/mp17olznx.css';

const viewBox = {"width":898,"height":217};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<clipPath id="SVGq7acidrh"><path class="yj_r54n6x"/></clipPath><g class="kuf42lb8e"><path class="j455nerhl"/><g clip-path="url(#SVGq7acidrh)"><path class="mp17olznx"/></g></g>`,
		"fallback": "thesvg-color:pizza-hut",
	});
}

export default Component;
