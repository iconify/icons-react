import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/adzscxzut.css';
import '../../css/p/ptaz8obxi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="adzscxzut"/><path class="ptaz8obxi"/></g>`,
		"fallback": "streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david",
	});
}

export default Component;
