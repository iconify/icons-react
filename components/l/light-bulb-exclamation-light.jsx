import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuqogfllb.css';
import '../../css/l/ld96apbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuqogfllb"/><path clip-rule="evenodd" class="ld96apbkl"/>`,
		"fallback": "stash:light-bulb-exclamation-light",
	});
}

export default Component;
