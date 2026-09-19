import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/smvju72-d.css';
import '../../css/e/em92-j02n.css';
import '../../css/r/rt9ertrgk.css';
import '../../css/t/tupok0b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="smvju72-d"/><path class="em92-j02n"/><path class="rt9ertrgk"/><path class="tupok0b3a"/></g>`,
		"fallback": "hugeicons:mosque-02",
	});
}

export default Component;
