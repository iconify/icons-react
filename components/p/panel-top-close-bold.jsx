import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9apwmb5t.css';
import '../../css/s/sks052b6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b9apwmb5t"/><path class="sks052b6m"/>`,
		"fallback": "solar:panel-top-close-bold",
	});
}

export default Component;
