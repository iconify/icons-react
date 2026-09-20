import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8rbkbcqz.css';
import '../../css/v/v3o11fhkj.css';
import '../../css/b/bvadesb8y.css';
import '../../css/r/rng2dzt7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8rbkbcqz"/><path class="v3o11fhkj"/><path class="bvadesb8y"/><path class="rng2dzt7g"/></g>`,
		"fallback": "streamline-color:nurse-hat",
	});
}

export default Component;
