import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/c/cf4va2ows.css';
import '../../css/l/ldse3ccpn.css';
import '../../css/e/e854pc0lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="cf4va2ows"/><path class="ldse3ccpn"/></g><path clip-rule="evenodd" class="e854pc0lb"/>`,
		"fallback": "solar:mug-bold-duotone",
	});
}

export default Component;
