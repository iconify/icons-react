import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/m/mqzqakfat.css';
import '../../css/y/y7a_ch3ra.css';
import '../../css/p/p8tliqydp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="mqzqakfat"/><path class="y7a_ch3ra"/><path class="p8tliqydp"/></g>`,
		"fallback": "icon-park:local-pin",
	});
}

export default Component;
