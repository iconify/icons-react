import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uql99-f4j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uql99-f4j"/>`,
		"fallback": "devicon-plain:linuxmint-wordmark",
	});
}

export default Component;
