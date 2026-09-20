import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiuj1-afm.css';
import '../../css/w/wd15b2bym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiuj1-afm"/><path clip-rule="evenodd" class="wd15b2bym"/>`,
		"fallback": "lsicon:right-square-filled",
	});
}

export default Component;
