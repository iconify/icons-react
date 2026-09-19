import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjxr91cpr.css';
import '../../css/j/jq4bsyb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pjxr91cpr"/><rect class="jq4bsyb2r"/>`,
		"fallback": "ion:switch-outline",
	});
}

export default Component;
