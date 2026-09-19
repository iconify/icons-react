import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7wg_lntv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7wg_lntv"/>`,
		"fallback": "devicon-plain:ubuntu-wordmark",
	});
}

export default Component;
