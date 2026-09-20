import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds8oc_btb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds8oc_btb"/>`,
		"fallback": "pinhead:three-people-standing-in-rectangle-under-arrow-up-beside-arrow-down",
	});
}

export default Component;
