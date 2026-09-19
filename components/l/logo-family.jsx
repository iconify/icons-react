import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kny6_hb4a.css';
import '../../css/r/rys9nkbax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kny6_hb4a"/><path class="rys9nkbax"/>`,
		"fallback": "famicons:logo-family",
	});
}

export default Component;
