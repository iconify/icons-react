import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0iw1wi4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0iw1wi4m"/>`,
		"fallback": "keyline-icons:panel-left-sharp-fill",
	});
}

export default Component;
