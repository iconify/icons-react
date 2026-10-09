import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw5lpmbnm.css';
import '../../css/d/dm_gb5vkl.css';
import '../../css/v/vi2fl0bal.css';
import '../../css/b/bj-2m5who.css';
import '../../css/l/lkejyhbkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw5lpmbnm"/><path class="dm_gb5vkl"/><path class="vi2fl0bal"/><path class="bj-2m5who"/><path class="lkejyhbkt"/>`,
		"fallback": "energy-icons:led-48",
	});
}

export default Component;
