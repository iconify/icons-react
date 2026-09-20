import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ectx9jbem.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ectx9jbem"/>`,
		"fallback": "pinhead:lattice-tower-with-lookout-deck",
	});
}

export default Component;
