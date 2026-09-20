import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxj25bgnz.css';
import '../../css/e/ez2gus6vo.css';
import '../../css/r/rk6zeubgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wxj25bgnz"/><path class="ez2gus6vo"/><path clip-rule="evenodd" class="rk6zeubgw"/></g>`,
		"fallback": "streamline-color:speaker-1-flat",
	});
}

export default Component;
