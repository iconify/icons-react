import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvmmamb2n.css';
import '../../css/k/kiom4-bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvmmamb2n"/><path class="kiom4-bzk"/>`,
		"fallback": "streamline-ultimate:network-pin-bold",
	});
}

export default Component;
