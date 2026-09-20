import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-cry_4vx.css';
import '../../css/p/p_obrx4cs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-cry_4vx"/><path class="p_obrx4cs"/>`,
		"fallback": "streamline-pixel:interface-essential-bookmark",
	});
}

export default Component;
