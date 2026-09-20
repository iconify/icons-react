import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjxhde6hx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjxhde6hx"/>`,
		"fallback": "selfhst:minarca-dark",
	});
}

export default Component;
