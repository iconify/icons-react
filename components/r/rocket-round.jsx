import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eghrht6fx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eghrht6fx"/>`,
		"fallback": "coolicons:rocket-round",
	});
}

export default Component;
