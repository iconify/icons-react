import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwk-l_g_h.css';
import '../../css/a/adp9tjurn.css';
import '../../css/w/wbibebckq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wwk-l_g_h"/><path class="adp9tjurn"/><path class="wbibebckq"/></g>`,
		"fallback": "streamline-kameleon-color:text-file-duo",
	});
}

export default Component;
