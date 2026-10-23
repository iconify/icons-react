import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/jukvyzbzf.css';
import '../../css/p/pqz52nbgj.css';
import '../../css/w/wj4j9kl0g.css';
import '../../css/i/imct4h92g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="jukvyzbzf"/><path class="pqz52nbgj"/><path class="wj4j9kl0g"/><path class="imct4h92g"/></g>`,
		"fallback": "matita:syringe",
	});
}

export default Component;
