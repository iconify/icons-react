import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp_nqwbll.css';
import '../../css/p/p99jesbkc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp_nqwbll"/><path class="p99jesbkc"/>`,
		"fallback": "vaadin:start-cog",
	});
}

export default Component;
