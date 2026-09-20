import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsq8sfrxg.css';
import '../../css/f/fkt9bwryo.css';
import '../../css/b/b8ni7-bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsq8sfrxg"/><path class="fkt9bwryo"/><path class="b8ni7-bky"/>`,
		"fallback": "selfhst:tiktok",
	});
}

export default Component;
