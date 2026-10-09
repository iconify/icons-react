import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6jb10bks.css';
import '../../css/k/kp1vk88ht.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6jb10bks"/><path class="kp1vk88ht"/>`,
		"fallback": "energy-icons:stamp-20",
	});
}

export default Component;
