import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r85c85bkg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r85c85bkg"/>`,
		"fallback": "gis:map-print",
	});
}

export default Component;
