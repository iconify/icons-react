import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkkuh9ebd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkkuh9ebd"/>`,
		"fallback": "keyline-icons:swiss-franc-sharp-duotone",
	});
}

export default Component;
