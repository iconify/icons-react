import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvxw2nvec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dvxw2nvec"/>`,
		"fallback": "keyline-icons:square-plus-sharp-fill",
	});
}

export default Component;
