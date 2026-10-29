import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yj8f4c1fl.css';
import '../../css/l/ly64macnz.css';
import '../../css/c/cpfp9vbvk.css';
import '../../css/i/iusab3bxz.css';
import '../../css/l/l6nox-bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-a yj8f4c1fl"/><path class="ly64macnz wm-k"/><path class="cpfp9vbvk wm-k"/><path class="iusab3bxz wm-a"/><path class="l6nox-bis wm-a"/></g>`,
		"fallback": "withicons:messages-sketch",
	});
}

export default Component;
