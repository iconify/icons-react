import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_7p37bmf.css';
import '../../css/l/ly5qkx5wk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_7p37bmf"/><path class="ly5qkx5wk"/>`,
		"fallback": "devicon-plain:linkedin-wordmark",
	});
}

export default Component;
