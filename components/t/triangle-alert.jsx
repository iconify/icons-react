import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/burtvrwyn.css';
import '../../css/g/g5e1kgbax.css';
import '../../css/a/a3uie0bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="burtvrwyn"/><path class="g5e1kgbax"/><path class="a3uie0bxo"/></g>`,
		"fallback": "matita:triangle-alert",
	});
}

export default Component;
