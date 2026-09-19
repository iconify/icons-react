import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kyrkcgbkt.css';
import '../../css/p/pkjpf3lqg.css';
import '../../css/a/a-g2__2wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kyrkcgbkt"/><path clip-rule="evenodd" class="pkjpf3lqg"/><path class="a-g2__2wg"/>`,
		"fallback": "basil:notification-on-solid",
	});
}

export default Component;
