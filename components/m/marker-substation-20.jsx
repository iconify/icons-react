import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjp5_b_u.css';
import '../../css/w/w1hfhybdb.css';
import '../../css/e/ecqzus6uh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjp5_b_u"/><path class="w1hfhybdb"/><path class="ecqzus6uh"/>`,
		"fallback": "energy-icons:marker-substation-20",
	});
}

export default Component;
