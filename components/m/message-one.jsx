import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/f/fne_itbht.css';
import '../../css/t/tele8ebjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="fne_itbht"/><path class="tele8ebjz"/></g>`,
		"fallback": "icon-park-outline:message-one",
	});
}

export default Component;
