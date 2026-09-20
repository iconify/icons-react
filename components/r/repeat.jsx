import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot6crqbjc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ot6crqbjc"/>`,
		"fallback": "pajamas:repeat",
	});
}

export default Component;
