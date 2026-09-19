import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/estb-abdk.css';
import '../../css/d/dicdvz1vu.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="estb-abdk"/><path class="dicdvz1vu"/>`,
		"fallback": "flag:qa-4x3",
	});
}

export default Component;
