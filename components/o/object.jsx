import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki6y_ubzi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ki6y_ubzi"/>`,
		"fallback": "pajamas:object",
	});
}

export default Component;
