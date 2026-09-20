import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu-w_8f-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu-w_8f-c"/>`,
		"fallback": "streamline-sharp-color:pentagon-flat",
	});
}

export default Component;
