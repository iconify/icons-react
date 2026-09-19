import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unc1vhb8c.css';
import '../../css/j/jxe7zjbqu.css';
import '../../css/i/ijge8ccul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unc1vhb8c"/><path class="jxe7zjbqu"/><path class="ijge8ccul"/></g>`,
		"fallback": "icon-park:new-lark",
	});
}

export default Component;
