import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x68q403fs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x68q403fs"/>`,
		"fallback": "bi:line",
	});
}

export default Component;
