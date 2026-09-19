import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prrfs4b3a.css';

const viewBox = {"width":400,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prrfs4b3a"/>`,
		"fallback": "fa-brands:nutritionix",
	});
}

export default Component;
