import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh7nrubkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh7nrubkv"/>`,
		"fallback": "coolicons:magic-wand-fill-round",
	});
}

export default Component;
