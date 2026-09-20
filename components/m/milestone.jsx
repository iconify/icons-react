import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpk7xkb2w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpk7xkb2w"/>`,
		"fallback": "pajamas:milestone",
	});
}

export default Component;
