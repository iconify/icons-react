import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx7io3l3i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx7io3l3i"/>`,
		"fallback": "pinhead:person-standing-wearing-dress-beside-divider-beside-broadshouldered-person-standing",
	});
}

export default Component;
