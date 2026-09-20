import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/pqp9xye6v.css';
import '../../css/p/pz9iwls3d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="pqp9xye6v"/><path class="pz9iwls3d"/></g>`,
		"fallback": "marketeq:pendulum-5",
	});
}

export default Component;
