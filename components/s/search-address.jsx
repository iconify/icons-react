import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aukm4obte.css';
import '../../css/r/r8ldhbbds.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aukm4obte"/><path class="r8ldhbbds"/>`,
		"fallback": "gis:search-address",
	});
}

export default Component;
