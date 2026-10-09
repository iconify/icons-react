import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czj819b3o.css';
import '../../css/l/lh6vhf69p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czj819b3o"/><path class="lh6vhf69p"/>`,
		"fallback": "energy-icons:voicemail-20-bold",
	});
}

export default Component;
