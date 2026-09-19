import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caqrw6b9h.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caqrw6b9h"/>`,
		"fallback": "fa-solid:square-root",
	});
}

export default Component;
