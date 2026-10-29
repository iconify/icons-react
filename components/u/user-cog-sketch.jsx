import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gn6miabce.css';
import '../../css/t/t7-3-qbad.css';
import '../../css/i/igk2wisce.css';
import '../../css/s/swz8hebuo.css';
import '../../css/o/o392xu8sx.css';
import '../../css/y/y1psqgh7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gn6miabce wm-k"/><path class="t7-3-qbad wm-k"/><path class="igk2wisce wm-k"/><path class="swz8hebuo wm-s"/><path class="o392xu8sx wm-s"/><circle class="wm-s y1psqgh7g"/></g>`,
		"fallback": "withicons:user-cog-sketch",
	});
}

export default Component;
