import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjo89vpyj.css';
import '../../css/l/lja1fl8ad.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjo89vpyj"/><path class="lja1fl8ad"/>`,
		"fallback": "gis:search-data",
	});
}

export default Component;
