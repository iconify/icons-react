import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6e70qhux.css';
import '../../css/d/dwaxjacqs.css';
import '../../css/t/tjjl-3bqq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v6e70qhux"/><circle class="dwaxjacqs"/><circle class="tjjl-3bqq"/></g>`,
		"fallback": "icon-park-outline:projector",
	});
}

export default Component;
