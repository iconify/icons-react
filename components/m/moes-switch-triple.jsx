import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqkfg8b-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqkfg8b-o"/>`,
		"fallback": "cbi:moes-switch-triple",
	});
}

export default Component;
