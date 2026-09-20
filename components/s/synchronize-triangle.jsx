import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/o/oyqhp_bvg.css';
import '../../css/a/aoifjhzdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="oyqhp_bvg"/><path class="aoifjhzdu"/></g>`,
		"fallback": "streamline-cyber:synchronize-triangle",
	});
}

export default Component;
