import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh3q-gbac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh3q-gbac"/>`,
		"fallback": "roentgen:tactile-paving",
	});
}

export default Component;
