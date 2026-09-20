import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx46o0t2b.css';
import '../../css/z/zbzbr2c9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx46o0t2b"/><path class="zbzbr2c9t"/>`,
		"fallback": "selfhst:ticky-dark",
	});
}

export default Component;
