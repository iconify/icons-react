import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv8h0sugj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv8h0sugj"/>`,
		"fallback": "keyline-icons:sliders-2-vertical",
	});
}

export default Component;
