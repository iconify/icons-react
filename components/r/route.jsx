import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv1e92boa.css';
import '../../css/r/rtvgfzeze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv1e92boa"/><path class="rtvgfzeze"/>`,
		"fallback": "token:route",
	});
}

export default Component;
