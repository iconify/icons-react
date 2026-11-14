import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bt4xg4ftq.css';
import '../../css/f/fhas8sg6b.css';
import '../../css/r/rbw7kknaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bt4xg4ftq"/><path class="fhas8sg6b"/><path class="rbw7kknaz"/></g>`,
		"fallback": "hugeicons:wallet-done-01",
	});
}

export default Component;
