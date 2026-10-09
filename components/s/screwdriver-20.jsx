import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q85exbg4c.css';
import '../../css/s/sy0-p47dz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q85exbg4c"/><path class="sy0-p47dz"/>`,
		"fallback": "energy-icons:screwdriver-20",
	});
}

export default Component;
