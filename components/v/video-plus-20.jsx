import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wix0a5bey.css';
import '../../css/c/cdonwobot.css';
import '../../css/y/y4i3220kc.css';
import '../../css/z/zkdyo_ief.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wix0a5bey"/><path class="cdonwobot"/><path class="y4i3220kc"/><path class="zkdyo_ief"/>`,
		"fallback": "energy-icons:video-plus-20",
	});
}

export default Component;
