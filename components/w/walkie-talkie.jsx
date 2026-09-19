import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2ngn6fhw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2ngn6fhw"/>`,
		"fallback": "game-icons:walkie-talkie",
	});
}

export default Component;
