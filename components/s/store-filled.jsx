import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q85ug49pp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q85ug49pp"/>`,
		"fallback": "lsicon:store-filled",
	});
}

export default Component;
