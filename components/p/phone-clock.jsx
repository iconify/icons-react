import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brbx9-70d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brbx9-70d"/>`,
		"fallback": "noviair:phone-clock",
	});
}

export default Component;
