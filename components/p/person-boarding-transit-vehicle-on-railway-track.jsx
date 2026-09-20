import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imlbbu66u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imlbbu66u"/>`,
		"fallback": "pinhead:person-boarding-transit-vehicle-on-railway-track",
	});
}

export default Component;
