import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sn-5ovbxf.css';
import '../../css/s/s_g4zm_6z.css';
import '../../css/r/rs6vtfinx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sn-5ovbxf"/><path class="s_g4zm_6z"/><path class="rs6vtfinx"/></g>`,
		"fallback": "streamline-sharp-color:voice-mail",
	});
}

export default Component;
