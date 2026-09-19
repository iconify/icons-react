import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsgr4acwq.css';
import '../../css/q/qvr969ois.css';
import '../../css/w/wuqa13gqk.css';
import '../../css/j/j171pzbgu.css';
import '../../css/h/ha5b2dbqy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsgr4acwq"/><path class="qvr969ois"/><path class="wuqa13gqk"/><path class="j171pzbgu"/><path class="ha5b2dbqy"/>`,
		"fallback": "devicon:jupyter-wordmark",
	});
}

export default Component;
