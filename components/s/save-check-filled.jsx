import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw8ygub3e.css';
import '../../css/k/k7-izcbee.css';
import '../../css/e/e_r9uibzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw8ygub3e"/><path class="k7-izcbee"/><path class="e_r9uibzg"/>`,
		"fallback": "lucide-extended:save-check-filled",
	});
}

export default Component;
