import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/phbjf-bgp.css';
import '../../css/j/jm835gb6f.css';
import '../../css/t/tjcbo_urs.css';
import '../../css/p/pl2kjdbfh.css';
import '../../css/z/z5hcg5bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="phbjf-bgp wm-k"/><path class="jm835gb6f wm-a"/><path class="tjcbo_urs wm-k"/><path class="pl2kjdbfh"/><path class="wm-s z5hcg5bqv"/></g>`,
		"fallback": "withicons-bauhaus:mosque",
	});
}

export default Component;
