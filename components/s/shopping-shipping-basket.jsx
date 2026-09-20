import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8e86bczb.css';
import '../../css/l/lbjnpubsy.css';
import '../../css/y/yl21lvbmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8e86bczb"/><path class="lbjnpubsy"/><path class="yl21lvbmd"/>`,
		"fallback": "streamline-pixel:shopping-shipping-basket",
	});
}

export default Component;
