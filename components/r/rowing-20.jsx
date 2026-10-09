import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvskalk6x.css';
import '../../css/y/ychu0ub8d.css';
import '../../css/j/jy7ylib9w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvskalk6x"/><path class="ychu0ub8d"/><path class="jy7ylib9w"/>`,
		"fallback": "energy-icons:rowing-20",
	});
}

export default Component;
