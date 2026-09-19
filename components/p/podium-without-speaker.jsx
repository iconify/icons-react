import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2pno_a1u.css';
import '../../css/m/mp1ra6pzn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2pno_a1u"/><path class="mp1ra6pzn"/>`,
		"fallback": "flat-color-icons:podium-without-speaker",
	});
}

export default Component;
