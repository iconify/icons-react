import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gi6w2mh5t.css';
import '../../css/i/i7vap8bao.css';
import '../../css/r/r49sd0bbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gi6w2mh5t"/><path class="i7vap8bao wm-k"/><circle class="r49sd0bbi wm-a"/></g>`,
		"fallback": "withicons:toggle-sketch",
	});
}

export default Component;
