import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_bewjb3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_bewjb3w"/>`,
		"fallback": "selfhst:thingiverse-light",
	});
}

export default Component;
