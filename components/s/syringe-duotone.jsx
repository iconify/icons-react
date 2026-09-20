import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/sva33pbqa.css';
import '../../css/m/mak1mic-b.css';
import '../../css/q/qoill7eto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="sva33pbqa"/><path clip-rule="evenodd" class="mak1mic-b"/></g><path class="qoill7eto"/></g>`,
		"fallback": "reicon:syringe-duotone",
	});
}

export default Component;
