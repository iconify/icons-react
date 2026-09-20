import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp6n-mbch.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp6n-mbch"/>`,
		"fallback": "pinhead:pixel-droplet-with-shine",
	});
}

export default Component;
