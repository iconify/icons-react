import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn_x7fxrw.css';
import '../../css/n/n4_12dd-s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sn_x7fxrw"/><path clip-rule="evenodd" class="n4_12dd-s"/>`,
		"fallback": "qlementine-icons:minus-circle-16",
	});
}

export default Component;
