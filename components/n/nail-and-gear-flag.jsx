import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv91otbba.css';
import '../../css/m/mq-122b5g.css';
import '../../css/x/xdtovnk0g.css';
import '../../css/p/ph-mjcb4f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv91otbba"/><path clip-rule="evenodd" class="mq-122b5g"/><path class="xdtovnk0g"/><path class="ph-mjcb4f"/>`,
		"fallback": "openmoji:nail-and-gear-flag",
	});
}

export default Component;
