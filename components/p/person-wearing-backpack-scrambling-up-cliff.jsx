import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lejn1miiq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lejn1miiq"/>`,
		"fallback": "pinhead:person-wearing-backpack-scrambling-up-cliff",
	});
}

export default Component;
