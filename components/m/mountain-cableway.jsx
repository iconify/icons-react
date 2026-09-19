import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b16rg8bcl.css';
import '../../css/a/aqnacybqe.css';
import '../../css/q/qngp5f3zk.css';
import '../../css/q/q48y_3egp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b16rg8bcl"/><path class="aqnacybqe"/><path class="qngp5f3zk"/><path class="q48y_3egp"/></g>`,
		"fallback": "fluent-emoji-flat:mountain-cableway",
	});
}

export default Component;
