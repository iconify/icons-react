import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/v/vg1txhbza.css';
import '../../css/m/mvzwxxxnr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="vg1txhbza"/><path class="mvzwxxxnr"/></g>`,
		"fallback": "icon-park:wallet-two",
	});
}

export default Component;
