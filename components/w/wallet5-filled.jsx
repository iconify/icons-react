import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agj9gf16w.css';
import '../../css/b/bomkgpb-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agj9gf16w"/><path class="bomkgpb-n"/></g>`,
		"fallback": "reicon:wallet5-filled",
	});
}

export default Component;
