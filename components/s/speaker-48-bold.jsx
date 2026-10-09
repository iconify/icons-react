import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b10s5pbto.css';
import '../../css/j/japh7m8wk.css';
import '../../css/w/w1l08d2zj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b10s5pbto"/><path class="japh7m8wk"/><path class="w1l08d2zj"/>`,
		"fallback": "energy-icons:speaker-48-bold",
	});
}

export default Component;
