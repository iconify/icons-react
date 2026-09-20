import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_xc1ipka.css';
import '../../css/s/s_9tx4b8m.css';
import '../../css/o/ocght-rxa.css';
import '../../css/p/pfa7brbym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_xc1ipka"/><path class="s_9tx4b8m"/><path clip-rule="evenodd" class="ocght-rxa"/><path class="pfa7brbym"/>`,
		"fallback": "mingcute:sandstorm-fill",
	});
}

export default Component;
