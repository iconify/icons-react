import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw_x16bcn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uw_x16bcn"/>`,
		"fallback": "streamline-flex:user-full-body-solid",
	});
}

export default Component;
