import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aukm4obte.css';
import '../../css/u/uub_5lb9t.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aukm4obte"/><path class="uub_5lb9t"/>`,
		"fallback": "gis:search-attribtues",
	});
}

export default Component;
