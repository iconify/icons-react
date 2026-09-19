import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfn5b-eoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfn5b-eoc"/>`,
		"fallback": "ci:javascript",
	});
}

export default Component;
