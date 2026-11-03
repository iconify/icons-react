import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjf8htb8n.css';
import '../../css/j/jnu1yz2pk.css';
import '../../css/x/xlqockw5m.css';
import '../../css/z/zh2h96b0l.css';
import '../../css/i/ilz9b8c5r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjf8htb8n"/><path class="jnu1yz2pk"/><path class="xlqockw5m"/><path class="zh2h96b0l"/><path class="ilz9b8c5r"/>`,
		"fallback": "openmoji:melting-face",
	});
}

export default Component;
