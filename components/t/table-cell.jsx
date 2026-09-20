import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj4jnki3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj4jnki3f"/>`,
		"fallback": "jam:table-cell",
	});
}

export default Component;
