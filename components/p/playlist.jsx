import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu31aqbef.css';
import '../../css/s/s1mar9bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu31aqbef"/><path class="s1mar9bdi"/>`,
		"fallback": "pixel:playlist",
	});
}

export default Component;
