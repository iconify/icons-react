import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d90wrwq5c.css';
import '../../css/z/z-2w2eb0s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d90wrwq5c"/><path class="z-2w2eb0s"/>`,
		"fallback": "energy-icons:smartphone-vibrate-20",
	});
}

export default Component;
