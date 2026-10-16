import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zen2agbyu.css';
import '../../css/r/r_a_juvfe.css';
import '../../css/i/i5yaabj1z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zen2agbyu"/><path class="r_a_juvfe"/><path class="i5yaabj1z"/>`,
		"fallback": "energy-icons:tyre-48",
	});
}

export default Component;
