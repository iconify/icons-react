import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/i/iq51xwu9h.css';
import '../../css/b/be9mrtbtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="iq51xwu9h"/><path class="be9mrtbtw"/></g>`,
		"fallback": "icon-park:link-four",
	});
}

export default Component;
