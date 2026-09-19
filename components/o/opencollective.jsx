import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vc4sihb3j.css';
import '../../css/t/tcw-bq42t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vc4sihb3j"/><path class="tcw-bq42t"/></g>`,
		"fallback": "bi:opencollective",
	});
}

export default Component;
