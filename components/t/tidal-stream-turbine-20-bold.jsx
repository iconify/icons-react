import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4rl_dmmq.css';
import '../../css/z/z1x0aebyd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4rl_dmmq"/><path class="z1x0aebyd"/>`,
		"fallback": "energy-icons:tidal-stream-turbine-20-bold",
	});
}

export default Component;
