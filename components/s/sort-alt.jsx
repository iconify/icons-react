import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3jr0zbzo.css';
import '../../css/s/sdwec7b_p.css';
import '../../css/f/f674p_02h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3jr0zbzo"/><path class="sdwec7b_p"/><path class="f674p_02h"/>`,
		"fallback": "prime:sort-alt",
	});
}

export default Component;
