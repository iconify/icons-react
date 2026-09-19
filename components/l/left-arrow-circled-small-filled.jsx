import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn1hatb_t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn1hatb_t"/>`,
		"fallback": "dinkie-icons:left-arrow-circled-small-filled",
	});
}

export default Component;
