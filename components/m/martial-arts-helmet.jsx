import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fomg-571h.css';
import '../../css/r/r0oc75bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fomg-571h"/><path class="r0oc75bls"/></g>`,
		"fallback": "streamline-ultimate:martial-arts-helmet",
	});
}

export default Component;
