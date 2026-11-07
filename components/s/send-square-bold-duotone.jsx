import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/g/gy84gfb-f.css';
import '../../css/s/sqo895pky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="gy84gfb-f"/><path class="sqo895pky"/>`,
		"fallback": "solar:send-square-bold-duotone",
	});
}

export default Component;
