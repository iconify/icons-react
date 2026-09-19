import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edvji8e5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edvji8e5b"/>`,
		"fallback": "game-icons:relationship-bounds",
	});
}

export default Component;
