import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/chlsrtpkl.css';
import '../../css/n/nhushpb-h.css';
import '../../css/a/acuehpb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="chlsrtpkl"/><path clip-rule="evenodd" class="nhushpb-h"/><path class="acuehpb-e"/></g>`,
		"fallback": "reicon:user-speak2",
	});
}

export default Component;
