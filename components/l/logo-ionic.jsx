import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7_b83bfo.css';
import '../../css/w/w6uz2sbpd.css';
import '../../css/e/epr-bjb7y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7_b83bfo"/><circle class="w6uz2sbpd"/><path class="epr-bjb7y"/>`,
		"fallback": "famicons:logo-ionic",
	});
}

export default Component;
