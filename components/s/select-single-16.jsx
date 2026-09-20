import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b441swb4b.css';
import '../../css/f/fkf53bc3t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b441swb4b"/><path class="fkf53bc3t"/>`,
		"fallback": "octicon:select-single-16",
	});
}

export default Component;
