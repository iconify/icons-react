import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpqc5xbsu.css';
import '../../css/h/h2iv_1boz.css';
import '../../css/g/g3j7u010m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpqc5xbsu"/><path class="h2iv_1boz"/><path clip-rule="evenodd" class="g3j7u010m"/>`,
		"fallback": "solar:station-minimalistic-outline",
	});
}

export default Component;
