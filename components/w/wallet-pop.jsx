import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzv02bb8d.css';
import '../../css/j/j_9ue7byy.css';
import '../../css/f/fm8d65j-a.css';
import '../../css/o/om3xqxbjq.css';
import '../../css/u/uj9zd-bee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzv02bb8d"/><path class="j_9ue7byy"/><path class="fm8d65j-a"/><path class="om3xqxbjq"/><path class="uj9zd-bee"/></g>`,
		"fallback": "streamline-kameleon-color:wallet-pop",
	});
}

export default Component;
