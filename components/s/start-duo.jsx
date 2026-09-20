import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/d/dnmw1x70r.css';
import '../../css/t/tnenhly6r.css';
import '../../css/c/ck1_vwbrp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="dnmw1x70r"/><path class="tnenhly6r"/><path class="ck1_vwbrp"/></g>`,
		"fallback": "streamline-kameleon-color:start-duo",
	});
}

export default Component;
