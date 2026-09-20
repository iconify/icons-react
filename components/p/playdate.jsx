import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkv97o81o.css';
import '../../css/g/g1skskbus.css';
import '../../css/c/cveciqd7u.css';

const viewBox = {"width":496.6,"height":101.3};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kkv97o81o"><path class="g1skskbus"/><path class="cveciqd7u"/></g>`,
		"fallback": "thesvg-color:playdate",
	});
}

export default Component;
