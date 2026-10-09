import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl2h9z-2v.css';
import '../../css/o/o_t0ybbes.css';
import '../../css/e/ehtcwob1k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl2h9z-2v"/><path class="o_t0ybbes"/><path class="ehtcwob1k"/>`,
		"fallback": "energy-icons:underground-cable-48",
	});
}

export default Component;
