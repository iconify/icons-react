import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1lp2ibza.css';
import '../../css/k/kmphovwjy.css';
import '../../css/t/tklxzby7z.css';
import '../../css/k/k7gunuz7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1lp2ibza"/><path class="kmphovwjy"/><path class="tklxzby7z"/><path class="k7gunuz7g"/></g>`,
		"fallback": "streamline-kameleon-color:joystick-pop",
	});
}

export default Component;
