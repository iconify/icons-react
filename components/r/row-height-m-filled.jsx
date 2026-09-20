import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwda_o2io.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwda_o2io"/>`,
		"fallback": "lsicon:row-height-m-filled",
	});
}

export default Component;
