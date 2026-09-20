import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wajbq265d.css';
import '../../css/b/bfz916y2c.css';
import '../../css/u/u00y9gbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wajbq265d"/><path clip-rule="evenodd" class="bfz916y2c"/><path class="u00y9gbkv"/></g>`,
		"fallback": "streamline-sharp-color:volume-level-high-flat",
	});
}

export default Component;
