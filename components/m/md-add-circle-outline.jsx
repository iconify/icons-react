import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxds-kb_t.css';
import '../../css/m/moox_lvwe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxds-kb_t"/><path class="moox_lvwe"/>`,
		"fallback": "ion:md-add-circle-outline",
	});
}

export default Component;
