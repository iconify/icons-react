import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn3qw1s0j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn3qw1s0j"/>`,
		"fallback": "nimbus:marketing",
	});
}

export default Component;
