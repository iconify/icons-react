import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfo6uib_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfo6uib_j"/>`,
		"fallback": "keyline-icons:package-plus",
	});
}

export default Component;
