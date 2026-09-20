import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ia4qhfxyu.css';
import '../../css/t/t89nrcc7y.css';
import '../../css/z/z--ewbbpy.css';
import '../../css/r/ryq-x8kyz.css';
import '../../css/c/cksqinzdx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ia4qhfxyu"/><path class="t89nrcc7y"/><path class="z--ewbbpy"/><path class="ryq-x8kyz"/><path class="cksqinzdx"/></g>`,
		"fallback": "streamline-kameleon-color:wallet-duo",
	});
}

export default Component;
