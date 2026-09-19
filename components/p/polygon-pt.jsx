import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vey7tzb_i.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vey7tzb_i"/>`,
		"fallback": "gis:polygon-pt",
	});
}

export default Component;
