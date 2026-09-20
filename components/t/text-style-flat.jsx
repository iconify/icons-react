import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl3djfw5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hl3djfw5w"/>`,
		"fallback": "streamline-sharp-color:text-style-flat",
	});
}

export default Component;
