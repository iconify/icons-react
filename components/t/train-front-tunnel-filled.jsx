import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa7izibxv.css';
import '../../css/t/t9gs7gpae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa7izibxv"/><path clip-rule="evenodd" class="t9gs7gpae"/>`,
		"fallback": "lucide-extended:train-front-tunnel-filled",
	});
}

export default Component;
