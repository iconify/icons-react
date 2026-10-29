import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl5uzhbhz.css';
import '../../css/a/a-8u3piaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl5uzhbhz wm-k"/><path class="a-8u3piaa wm-a"/>`,
		"fallback": "withicons-bauhaus:plus-circle",
	});
}

export default Component;
