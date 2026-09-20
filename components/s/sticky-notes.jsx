import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pa7yzpbyc.css';
import '../../css/b/bn-2pebwd.css';
import '../../css/s/srwmimt6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pa7yzpbyc"/><path class="bn-2pebwd"/><path class="srwmimt6b"/></g>`,
		"fallback": "lucide:sticky-notes",
	});
}

export default Component;
