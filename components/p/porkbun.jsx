import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvs3i2z5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvs3i2z5t"/>`,
		"fallback": "thesvg:porkbun",
	});
}

export default Component;
