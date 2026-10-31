import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/s/s3e_hkbcn.css';
import '../../css/t/tki42wbuv.css';
import '../../css/q/q7g61vbjx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="s3e_hkbcn"/><path class="tki42wbuv"/><path class="q7g61vbjx"/></g>`,
		"fallback": "streamline-kameleon-color:movie-file-3-pop",
	});
}

export default Component;
