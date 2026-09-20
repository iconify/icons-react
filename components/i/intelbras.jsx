import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3recgbof.css';
import '../../css/d/dqdy3itdg.css';
import '../../css/e/etnb34u3l.css';

const viewBox = {"width":210,"height":43.08};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="q3recgbof"><path class="dqdy3itdg"/><path class="etnb34u3l"/></g>`,
		"fallback": "thesvg-color:intelbras",
	});
}

export default Component;
