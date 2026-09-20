import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwpfp-bmv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dwpfp-bmv"/>`,
		"fallback": "qlementine-icons:test-16",
	});
}

export default Component;
