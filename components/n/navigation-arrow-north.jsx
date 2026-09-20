import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzwd_xb3p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzwd_xb3p"/>`,
		"fallback": "streamline-flex:navigation-arrow-north",
	});
}

export default Component;
