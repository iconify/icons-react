import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa4i_ynuq.css';
import '../../css/q/qfxk42bpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa4i_ynuq"/><path class="qfxk42bpg"/>`,
		"fallback": "lucide-extended:messages-square-filled",
	});
}

export default Component;
