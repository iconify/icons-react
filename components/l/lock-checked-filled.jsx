import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6vz2xq0h.css';
import '../../css/i/ii-9vg1fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6vz2xq0h"/><path class="ii-9vg1fj"/>`,
		"fallback": "tdesign:lock-checked-filled",
	});
}

export default Component;
