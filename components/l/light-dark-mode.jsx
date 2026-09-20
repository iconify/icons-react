import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjc_0wgix.css';
import '../../css/b/bnqvmbbbi.css';
import '../../css/j/jmw4l2mmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="zjc_0wgix"><path class="bnqvmbbbi"/><path class="jmw4l2mmm"/></g>`,
		"fallback": "streamline-sharp:light-dark-mode",
	});
}

export default Component;
