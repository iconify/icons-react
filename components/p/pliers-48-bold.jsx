import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0hsllbzz.css';
import '../../css/h/hsyyodqzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0hsllbzz"/><path class="hsyyodqzt"/>`,
		"fallback": "energy-icons:pliers-48-bold",
	});
}

export default Component;
