import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogv-8seqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogv-8seqc"/>`,
		"fallback": "mdi:spade",
	});
}

export default Component;
