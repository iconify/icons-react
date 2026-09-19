import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ndv5-vm.css';
import '../../css/f/fiwf45bml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="p6ndv5-vm"/><path class="fiwf45bml"/>`,
		"fallback": "garden:table-fill-12",
	});
}

export default Component;
