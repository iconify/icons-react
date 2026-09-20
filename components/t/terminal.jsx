import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmy1g3b0n.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmy1g3b0n"/>`,
		"fallback": "octicon:terminal",
	});
}

export default Component;
