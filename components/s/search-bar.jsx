import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bcc5t8bhf.css';
import '../../css/a/alwpoib_a.css';
import '../../css/b/bkssc_qsq.css';
import '../../css/l/lugto7dwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bcc5t8bhf"/><path class="alwpoib_a"/><path class="bkssc_qsq"/><path class="lugto7dwc"/></g>`,
		"fallback": "streamline-sharp-color:search-bar",
	});
}

export default Component;
