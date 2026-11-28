import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv5hbjbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv5hbjbfn"/>`,
		"fallback": "noviair:scan-x",
	});
}

export default Component;
