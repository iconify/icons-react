import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6s2ptbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6s2ptbce"/>`,
		"fallback": "nrk:some-tommelned-active",
	});
}

export default Component;
