import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zaigx2b8t.css';
import '../../css/l/lj4fzeu5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zaigx2b8t"/><path class="lj4fzeu5n"/>`,
		"fallback": "energy-icons:music-20",
	});
}

export default Component;
