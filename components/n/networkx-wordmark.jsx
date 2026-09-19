import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_kyabxq.css';
import '../../css/q/qevuypzfx.css';
import '../../css/m/mkh8dfbqu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_kyabxq"/><path class="qevuypzfx"/><path class="mkh8dfbqu"/>`,
		"fallback": "devicon:networkx-wordmark",
	});
}

export default Component;
