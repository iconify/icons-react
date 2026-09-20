import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt5i5t-vb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt5i5t-vb"/>`,
		"fallback": "roentgen:lattice-wave-left-wave-right",
	});
}

export default Component;
