import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/ss6oambzz.css';
import '../../css/k/kc4nf4b5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ss6oambzz"/><path class="kc4nf4b5o"/></g>`,
		"fallback": "doodle-icons:printer",
	});
}

export default Component;
