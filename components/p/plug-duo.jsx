import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/triuozb4n.css';
import '../../css/h/hnyrl4-sq.css';
import '../../css/z/z2ib2i8il.css';
import '../../css/x/x9vby1b4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="triuozb4n"/><path class="hnyrl4-sq"/><path class="z2ib2i8il"/><path class="x9vby1b4g"/></g>`,
		"fallback": "streamline-kameleon-color:plug-duo",
	});
}

export default Component;
