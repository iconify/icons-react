import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tgiz70bcu.css';
import '../../css/e/eq9l84oyb.css';
import '../../css/g/gzf04abkt.css';
import '../../css/k/kyiqf-ijv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tgiz70bcu"/><path class="eq9l84oyb"/><path class="gzf04abkt"/><path class="kyiqf-ijv"/></g>`,
		"fallback": "streamline-cyber-color:macro-mode",
	});
}

export default Component;
