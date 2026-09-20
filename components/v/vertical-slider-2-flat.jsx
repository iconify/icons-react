import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m8yq9cc8m.css';
import '../../css/r/romfjhbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m8yq9cc8m"/><path class="romfjhbgf"/></g>`,
		"fallback": "streamline-sharp-color:vertical-slider-2-flat",
	});
}

export default Component;
