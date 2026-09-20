import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0ix46b3r.css';
import '../../css/p/p1yx4trbb.css';
import '../../css/d/dcy5gh-xs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="r0ix46b3r"/><circle class="p1yx4trbb"/><path class="dcy5gh-xs"/>`,
		"fallback": "selfhst:navidrome",
	});
}

export default Component;
