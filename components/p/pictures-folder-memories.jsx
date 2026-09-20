import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/k/kq04ie9_c.css';
import '../../css/e/e7w2psbvj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="kq04ie9_c"/><path class="e7w2psbvj"/></g>`,
		"fallback": "streamline-flex:pictures-folder-memories",
	});
}

export default Component;
