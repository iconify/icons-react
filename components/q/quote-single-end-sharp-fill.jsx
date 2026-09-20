import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3csk8btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3csk8btg"/>`,
		"fallback": "keyline-icons:quote-single-end-sharp-fill",
	});
}

export default Component;
