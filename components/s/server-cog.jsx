import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rn41ubbup.css';
import '../../css/i/i9_-pzb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rn41ubbup"/><path class="i9_-pzb4f"/></g>`,
		"fallback": "hugeicons:server-cog",
	});
}

export default Component;
