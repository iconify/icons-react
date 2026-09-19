import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qetnckbkp.css';
import '../../css/y/ya1w5kb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qetnckbkp"/><path class="ya1w5kb7t"/>`,
		"fallback": "fxemoji:silhouetteohjapan",
	});
}

export default Component;
