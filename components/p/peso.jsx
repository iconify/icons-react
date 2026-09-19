import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_js4bbia.css';
import '../../css/d/d47xi2b9o.css';
import '../../css/b/be97_nbqe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_js4bbia"/><path class="d47xi2b9o"/><path class="be97_nbqe"/>`,
		"fallback": "formkit:peso",
	});
}

export default Component;
