import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2cslsb2t.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2cslsb2t"/>`,
		"fallback": "fa:s15",
	});
}

export default Component;
