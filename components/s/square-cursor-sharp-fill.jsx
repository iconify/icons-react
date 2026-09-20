import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcnqc5t2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zcnqc5t2t"/>`,
		"fallback": "keyline-icons:square-cursor-sharp-fill",
	});
}

export default Component;
