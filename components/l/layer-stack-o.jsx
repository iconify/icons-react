import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp8_3vedr.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp8_3vedr"/>`,
		"fallback": "gis:layer-stack-o",
	});
}

export default Component;
