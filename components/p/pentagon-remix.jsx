import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw_gh8mfn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw_gh8mfn"/>`,
		"fallback": "streamline:pentagon-remix",
	});
}

export default Component;
