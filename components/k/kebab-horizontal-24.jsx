import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kss-o9_-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kss-o9_-w"/>`,
		"fallback": "octicon:kebab-horizontal-24",
	});
}

export default Component;
