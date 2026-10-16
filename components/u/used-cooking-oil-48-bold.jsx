import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyo9awbxy.css';
import '../../css/i/iip25ub1u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyo9awbxy"/><path class="iip25ub1u"/>`,
		"fallback": "energy-icons:used-cooking-oil-48-bold",
	});
}

export default Component;
