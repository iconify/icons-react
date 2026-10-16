import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b20gz5bfs.css';
import '../../css/b/bv0gny4-m.css';
import '../../css/o/on0pidpto.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b20gz5bfs"/><path class="bv0gny4-m"/><path class="on0pidpto"/>`,
		"fallback": "energy-icons:pipe-wrench-20",
	});
}

export default Component;
