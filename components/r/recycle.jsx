import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow5n59_vm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow5n59_vm"/>`,
		"fallback": "et:recycle",
	});
}

export default Component;
