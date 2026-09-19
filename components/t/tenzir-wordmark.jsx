import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v50ep0b7m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v50ep0b7m"/>`,
		"fallback": "devicon:tenzir-wordmark",
	});
}

export default Component;
