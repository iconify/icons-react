import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skyb54b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skyb54b-n"/>`,
		"fallback": "keyline-icons:panel-bottom-dashed-sharp",
	});
}

export default Component;
