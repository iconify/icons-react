import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx-tse73g.css';

const viewBox = {"width":717,"height":727};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hx-tse73g"/>`,
		"fallback": "ls:skype",
	});
}

export default Component;
