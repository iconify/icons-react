import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evge9_brb.css';
import '../../css/j/jdicwcndp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evge9_brb"/><path class="jdicwcndp"/>`,
		"fallback": "selfhst:solidcraft-dark",
	});
}

export default Component;
