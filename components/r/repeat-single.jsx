import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d2hx6zd8z.css';
import '../../css/w/wp5tlqhlu.css';
import '../../css/r/rngum0m3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d2hx6zd8z"/><path class="wp5tlqhlu"/><path class="rngum0m3z"/></g>`,
		"fallback": "streamline-flex:repeat-single",
	});
}

export default Component;
