import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qkm3xcbxk.css';
import '../../css/n/n4iu-sbqo.css';
import '../../css/x/xenr55hzn.css';
import '../../css/s/s_wp055nf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qkm3xcbxk"/><path class="n4iu-sbqo"/><circle class="xenr55hzn"/><circle class="s_wp055nf"/></g>`,
		"fallback": "hugeicons:van",
	});
}

export default Component;
