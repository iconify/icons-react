import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/i/iuedzys_f.css';
import '../../css/u/ua-65ikbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="iuedzys_f"/><path class="ua-65ikbs"/></g>`,
		"fallback": "si:shield-police-line",
	});
}

export default Component;
