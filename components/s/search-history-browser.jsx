import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/igserioka.css';
import '../../css/e/e17q9urcc.css';
import '../../css/z/zzqfdi0hf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="igserioka"/><path class="e17q9urcc"/><path class="zzqfdi0hf"/></g>`,
		"fallback": "streamline-sharp-color:search-history-browser",
	});
}

export default Component;
