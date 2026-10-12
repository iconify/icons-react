import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twyecdg0k.css';
import '../../css/t/tzg0a7gil.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twyecdg0k"/><path class="tzg0a7gil"/>`,
		"fallback": "energy-icons:soldering-iron-20",
	});
}

export default Component;
