import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbykibczi.css';
import '../../css/f/fm67_nbcb.css';
import '../../css/r/r7elkeb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbykibczi"/><path class="fm67_nbcb"/><path class="r7elkeb0m"/>`,
		"fallback": "solar:link-minimalistic-2-bold",
	});
}

export default Component;
