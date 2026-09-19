import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2hpmjtqc.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2hpmjtqc"/>`,
		"fallback": "whh:sharethree",
	});
}

export default Component;
