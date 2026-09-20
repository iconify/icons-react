import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/di133lvbl.css';
import '../../css/r/ro-_eyvas.css';
import '../../css/s/sbd2rvcya.css';
import '../../css/l/lkj9n1fkc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="di133lvbl"/><path class="ro-_eyvas"/><path class="sbd2rvcya"/><path class="lkj9n1fkc"/></g>`,
		"fallback": "streamline-plump-color:voice-mail",
	});
}

export default Component;
