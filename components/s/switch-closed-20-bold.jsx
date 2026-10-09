import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi9uwcchg.css';
import '../../css/k/kz2_3wbrk.css';
import '../../css/k/kn3-ey60h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi9uwcchg"/><path class="kz2_3wbrk"/><path class="kn3-ey60h"/>`,
		"fallback": "energy-icons:switch-closed-20-bold",
	});
}

export default Component;
