import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfy3eubrn.css';
import '../../css/h/hoeze_b0l.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="hfy3eubrn"/><path class="hoeze_b0l"/>`,
		"fallback": "map:snowboarding",
	});
}

export default Component;
