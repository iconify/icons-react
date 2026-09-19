import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/v/v-f79accf.css';
import '../../css/p/pjeackbyg.css';
import '../../css/b/b0u8-bb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="v-f79accf"/><path class="pjeackbyg"/><circle class="b0u8-bb3i"/></g>`,
		"fallback": "icon-park:stand-up",
	});
}

export default Component;
