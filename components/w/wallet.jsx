import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/g23gzi3eb.css';
import '../../css/f/fjnh0-bor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="g23gzi3eb"/><path class="fjnh0-bor"/></g>`,
		"fallback": "streamline-plump:wallet",
	});
}

export default Component;
