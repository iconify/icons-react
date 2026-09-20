import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw1f1uo6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw1f1uo6z"/>`,
		"fallback": "octicon:multi-select-24",
	});
}

export default Component;
