import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jku9oud5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jku9oud5t"/>`,
		"fallback": "si:mail-line",
	});
}

export default Component;
