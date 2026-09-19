import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/t/ta4flmb2c.css';
import '../../css/t/tl-og9bwb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="xdqh4gbub"/><path class="ta4flmb2c"/><circle class="tl-og9bwb"/></g>`,
		"fallback": "icon-park:stereo-one",
	});
}

export default Component;
