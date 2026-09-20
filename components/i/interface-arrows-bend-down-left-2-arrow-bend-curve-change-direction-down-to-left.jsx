import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/ljojhh50t.css';
import '../../css/d/d51ox5hiv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ljojhh50t"/><path class="d51ox5hiv"/></g>`,
		"fallback": "streamline:interface-arrows-bend-down-left-2-arrow-bend-curve-change-direction-down-to-left",
	});
}

export default Component;
