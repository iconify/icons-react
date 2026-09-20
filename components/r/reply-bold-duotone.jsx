import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7_snwbky.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/b/b508hdoqi.css';
import '../../css/s/ss7zqegju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l7_snwbky"/><g class="mc2zb0bvp"><path class="b508hdoqi"/><path class="ss7zqegju"/></g></g>`,
		"fallback": "solar:reply-bold-duotone",
	});
}

export default Component;
