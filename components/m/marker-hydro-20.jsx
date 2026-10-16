import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/b/bbtrgrbbi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="bbtrgrbbi"/>`,
		"fallback": "energy-icons:marker-hydro-20",
	});
}

export default Component;
