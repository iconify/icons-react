import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_vnwtbgd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_vnwtbgd"/>`,
		"fallback": "pinhead:person-boarding-school-bus",
	});
}

export default Component;
