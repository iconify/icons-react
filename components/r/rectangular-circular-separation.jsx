import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/fz97oyg2s.css';
import '../../css/d/ds2u6g6sa.css';
import '../../css/u/ueq5_pbmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="fz97oyg2s"/><path class="ds2u6g6sa"/><path class="ueq5_pbmd"/></g>`,
		"fallback": "icon-park:rectangular-circular-separation",
	});
}

export default Component;
