import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2hgvfy9u.css';
import '../../css/n/n_obwdb-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2hgvfy9u"/><path class="n_obwdb-b"/>`,
		"fallback": "garden:speech-bubble-lightning-bolt-stroke-16",
	});
}

export default Component;
