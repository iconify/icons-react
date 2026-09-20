import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_erbb58d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a_erbb58d"/>`,
		"fallback": "keyline-icons:tag-horizontal-end-sharp-fill",
	});
}

export default Component;
