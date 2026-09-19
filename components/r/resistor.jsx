import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/x/x9hfyabqz.css';
import '../../css/w/w_cf54ukm.css';
import '../../css/s/sk22xsb1b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="x9hfyabqz"/><path class="w_cf54ukm"/><path class="sk22xsb1b"/></g>`,
		"fallback": "icon-park:resistor",
	});
}

export default Component;
