import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydc7yznbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydc7yznbo"/>`,
		"fallback": "keyline-icons:phone-outgoing-sharp",
	});
}

export default Component;
