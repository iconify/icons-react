import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm-3rccze.css';
import '../../css/h/h3fdh8ipt.css';
import '../../css/f/fbp3cgb3s.css';
import '../../css/a/aftd3mbeu.css';
import '../../css/e/eere0mbbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-3rccze wm-k"/><path class="h3fdh8ipt wm-k"/><path class="fbp3cgb3s wm-a"/><path class="aftd3mbeu wm-a"/><path class="eere0mbbf wm-s"/>`,
		"fallback": "withicons-bauhaus:piggy-bank",
	});
}

export default Component;
