import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxii6vbsf.css';
import '../../css/t/t1p84m-dc.css';
import '../../css/f/fjofep9xd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxii6vbsf"/><path class="t1p84m-dc"/><path class="fjofep9xd"/></g>`,
		"fallback": "reicon:rewind-circle-duotone",
	});
}

export default Component;
