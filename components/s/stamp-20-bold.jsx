import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he4rpzjtd.css';
import '../../css/c/cv0y15bbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he4rpzjtd"/><path class="cv0y15bbh"/>`,
		"fallback": "energy-icons:stamp-20-bold",
	});
}

export default Component;
