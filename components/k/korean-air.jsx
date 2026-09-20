import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx-an1_mg.css';
import '../../css/f/fn5u5cm5f.css';
import '../../css/a/a2x7kgqjz.css';

const viewBox = {"width":1907.315,"height":291.123};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmIolUdhw" width="275.838" height="291.123" x="0" y="0" maskUnits="userSpaceOnUse"><path class="qx-an1_mg"/></mask></defs><g mask="url(#SVGmIolUdhw)"><path class="fn5u5cm5f"/></g><path class="a2x7kgqjz"/>`,
		"fallback": "thesvg-color:korean-air",
	});
}

export default Component;
