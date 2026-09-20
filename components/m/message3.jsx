import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ibc6kieee.css';
import '../../css/p/ph66tfbtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ibc6kieee"/><path class="ph66tfbtw"/></g>`,
		"fallback": "reicon:message3",
	});
}

export default Component;
