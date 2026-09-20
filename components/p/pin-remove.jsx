import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9vh884bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9vh884bd"/>`,
		"fallback": "reicon:pin-remove",
	});
}

export default Component;
