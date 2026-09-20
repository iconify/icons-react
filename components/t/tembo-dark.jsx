import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd5_iibfn.css';

const viewBox = {"width":153,"height":152};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fd5_iibfn"/>`,
		"fallback": "thesvg-color:tembo-dark",
	});
}

export default Component;
