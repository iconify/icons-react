import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk_4ahm4b.css';
import '../../css/f/fvv8vzbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk_4ahm4b wm-k"/><path class="fvv8vzbvy wm-a"/>`,
		"fallback": "withicons-bauhaus:language",
	});
}

export default Component;
