import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trevmthyb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trevmthyb"/>`,
		"fallback": "pinhead:person-riding-pedal-boat-on-water",
	});
}

export default Component;
