import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwkoyxiim.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwkoyxiim"/>`,
		"fallback": "devicon-plain:packer-wordmark",
	});
}

export default Component;
