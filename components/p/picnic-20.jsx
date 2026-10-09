import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aizeie9_j.css';
import '../../css/d/d-a358n2r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aizeie9_j"/><path class="d-a358n2r"/>`,
		"fallback": "energy-icons:picnic-20",
	});
}

export default Component;
