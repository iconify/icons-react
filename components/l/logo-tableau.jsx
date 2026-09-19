import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtzdz7blb.css';
import '../../css/l/l06wekb2j.css';
import '../../css/f/ff7iaab8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtzdz7blb"/><path class="l06wekb2j"/><path class="ff7iaab8c"/>`,
		"fallback": "famicons:logo-tableau",
	});
}

export default Component;
