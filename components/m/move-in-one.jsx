import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dde--vtyi.css';
import '../../css/i/ivbb23btf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="dde--vtyi"/><path class="ivbb23btf"/></g>`,
		"fallback": "icon-park:move-in-one",
	});
}

export default Component;
