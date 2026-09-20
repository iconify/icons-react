import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw2c6mblg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw2c6mblg"/>`,
		"fallback": "pinhead:tshirt-on-clothes-hanger-and-folded-linens",
	});
}

export default Component;
