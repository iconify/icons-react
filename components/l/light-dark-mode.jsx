import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r83zywbch.css';
import '../../css/f/fwajnvbhj.css';
import '../../css/p/p7x1z2brk.css';
import '../../css/a/ajbx9ybtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r83zywbch"/><path class="fwajnvbhj"/><path class="p7x1z2brk"/><path class="ajbx9ybtw"/></g>`,
		"fallback": "streamline-sharp-color:light-dark-mode",
	});
}

export default Component;
