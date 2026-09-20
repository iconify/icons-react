import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvgwt9bgw.css';
import '../../css/g/gelt6abfo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nvgwt9bgw"/><path clip-rule="evenodd" class="gelt6abfo"/></g>`,
		"fallback": "streamline-plump-color:medical-bag-flat",
	});
}

export default Component;
