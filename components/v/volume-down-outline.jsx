import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlo02_iiq.css';
import '../../css/q/qw5e84bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vlo02_iiq"/><path class="qw5e84bjg"/>`,
		"fallback": "basil:volume-down-outline",
	});
}

export default Component;
