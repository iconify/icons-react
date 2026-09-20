import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdf_24b_u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdf_24b_u"/>`,
		"fallback": "pinhead:passport-with-graticule-globe",
	});
}

export default Component;
