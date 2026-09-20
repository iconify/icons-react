import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuqogfllb.css';
import '../../css/z/z2amuho-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuqogfllb"/><path clip-rule="evenodd" class="z2amuho-u"/>`,
		"fallback": "stash:light-bulb-exclamation",
	});
}

export default Component;
