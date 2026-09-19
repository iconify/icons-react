import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pser2-bxo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pser2-bxo"/>`,
		"fallback": "dinkie-icons:two-button-mouse-filled",
	});
}

export default Component;
