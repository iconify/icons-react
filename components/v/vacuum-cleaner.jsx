import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rmp-s2bha.css';
import '../../css/p/pkeysccqz.css';
import '../../css/d/dp5zhybuh.css';
import '../../css/a/alc06qbbb.css';
import '../../css/i/iemg7rbcn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="rmp-s2bha"/><path class="pkeysccqz"/><path class="dp5zhybuh"/><circle class="alc06qbbb"/><path class="iemg7rbcn"/></g>`,
		"fallback": "icon-park:vacuum-cleaner",
	});
}

export default Component;
