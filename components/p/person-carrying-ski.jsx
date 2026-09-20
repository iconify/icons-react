import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytff_t6vw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytff_t6vw"/>`,
		"fallback": "pinhead:person-carrying-ski",
	});
}

export default Component;
