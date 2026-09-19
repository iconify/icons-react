import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwx7_1bes.css';
import '../../css/h/ha1q3jlnu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwx7_1bes"/><path class="ha1q3jlnu"/>`,
		"fallback": "gis:layer-alt-add-o",
	});
}

export default Component;
