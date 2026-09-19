import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rev81cbck.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rev81cbck"/>`,
		"fallback": "fa7-solid:person-running",
	});
}

export default Component;
