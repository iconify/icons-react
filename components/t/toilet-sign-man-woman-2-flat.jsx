import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvgr2srcy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pvgr2srcy"/>`,
		"fallback": "streamline-color:toilet-sign-man-woman-2-flat",
	});
}

export default Component;
