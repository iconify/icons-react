import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cn05-lgul.css';
import '../../css/l/ln8_9rr3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="circleFlagsKa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsKa0)"><path class="cn05-lgul"/><path class="ln8_9rr3g"/></g>`,
		"fallback": "circle-flags:ka",
	});
}

export default Component;
