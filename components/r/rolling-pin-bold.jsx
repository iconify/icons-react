import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttg6ivr-q.css';
import '../../css/k/k0g8rv05t.css';
import '../../css/a/ahhagtoge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttg6ivr-q"/><path class="k0g8rv05t"/><path class="ahhagtoge"/>`,
		"fallback": "solar:rolling-pin-bold",
	});
}

export default Component;
