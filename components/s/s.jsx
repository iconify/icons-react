import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9q2ikbeq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9q2ikbeq"/>`,
		"fallback": "fa7-solid:s",
	});
}

export default Component;
