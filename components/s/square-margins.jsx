import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/f80m4wbpg.css';
import '../../css/u/utpmh3lly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="f80m4wbpg"/><path class="utpmh3lly"/></g>`,
		"fallback": "proicons:square-margins",
	});
}

export default Component;
