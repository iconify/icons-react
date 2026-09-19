import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lua0b7fsf.css';
import '../../css/a/aukm4obte.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lua0b7fsf"/><path class="aukm4obte"/>`,
		"fallback": "gis:search-coord",
	});
}

export default Component;
