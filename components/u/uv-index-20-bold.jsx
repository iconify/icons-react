import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho_z9ty5t.css';
import '../../css/h/he6n-hpbf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho_z9ty5t"/><path class="he6n-hpbf"/>`,
		"fallback": "energy-icons:uv-index-20-bold",
	});
}

export default Component;
