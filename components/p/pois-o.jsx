import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln_xg1opz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln_xg1opz"/>`,
		"fallback": "gis:pois-o",
	});
}

export default Component;
