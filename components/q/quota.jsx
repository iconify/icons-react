import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9q2-odkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k9q2-odkj"/>`,
		"fallback": "pajamas:quota",
	});
}

export default Component;
