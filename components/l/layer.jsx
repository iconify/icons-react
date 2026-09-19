import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lf586bnrj.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lf586bnrj"/>`,
		"fallback": "gis:layer",
	});
}

export default Component;
