import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pxyg1sb5z.css';
import '../../css/l/lico50vda.css';
import '../../css/v/voojxubbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pxyg1sb5z"/><path class="lico50vda"/><path class="voojxubbp"/></g>`,
		"fallback": "mage:video-download",
	});
}

export default Component;
