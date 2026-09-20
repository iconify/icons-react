import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqfxqwb8y.css';
import '../../css/v/vd40rwvyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqfxqwb8y"/><path class="vd40rwvyn"/>`,
		"fallback": "selfhst:postal-dark",
	});
}

export default Component;
