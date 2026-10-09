import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bz81stb1f.css';
import '../../css/o/o_l2ikyvi.css';
import '../../css/t/tz03pia3v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bz81stb1f"/><path class="o_l2ikyvi"/><path class="tz03pia3v"/>`,
		"fallback": "energy-icons:refresh-cw-48-bold",
	});
}

export default Component;
