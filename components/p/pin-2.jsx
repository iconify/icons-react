import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mq-jbmd_n.css';
import '../../css/v/vf5hwbb7p.css';
import '../../css/m/mbhw9acje.css';
import '../../css/a/aqkaymaeh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="mq-jbmd_n"/><path class="vf5hwbb7p"/><path class="mbhw9acje"/><path class="aqkaymaeh"/></g>`,
		"fallback": "streamline-plump-color:pin-2",
	});
}

export default Component;
