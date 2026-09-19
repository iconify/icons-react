import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q73ykcblb.css';
import '../../css/q/qgekv_ybn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q73ykcblb"/><path class="qgekv_ybn"/>`,
		"fallback": "carbon:virtual-machine",
	});
}

export default Component;
