import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk1g1aczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk1g1aczw"/>`,
		"fallback": "si:left-right-fill",
	});
}

export default Component;
