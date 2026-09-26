import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtec2jsdr.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/r8--jog_c.css';
import '../../css/x/x0h9n2bbe.css';
import '../../css/r/r7zqynqqz.css';
import '../../css/y/ylqmu_4on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtec2jsdr"/><g class="mc2zb0bvp"><path class="r8--jog_c"/><path class="x0h9n2bbe"/><path class="r7zqynqqz"/><path class="ylqmu_4on"/></g></g>`,
		"fallback": "solar:magnet-wave-bold-duotone",
	});
}

export default Component;
