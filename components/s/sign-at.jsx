import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bym2b9z7i.css';
import '../../css/m/m1vs99pas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bym2b9z7i"/><path class="m1vs99pas"/></g>`,
		"fallback": "streamline-plump-color:sign-at",
	});
}

export default Component;
