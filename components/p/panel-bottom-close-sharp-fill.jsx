import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjm4x02vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjm4x02vp"/>`,
		"fallback": "keyline-icons:panel-bottom-close-sharp-fill",
	});
}

export default Component;
