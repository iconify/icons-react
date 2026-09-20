import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/b_aj0-bjp.css';
import '../../css/d/dyoblhbmc.css';
import '../../css/q/qi7asdbxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="b_aj0-bjp"/><rect transform="rotate(-90 10.5 7.75)" class="dyoblhbmc"/><rect transform="rotate(-90 3.5 5.75)" class="qi7asdbxk"/></g>`,
		"fallback": "streamline:interface-align-vertical-bottom-align-design-bottom",
	});
}

export default Component;
