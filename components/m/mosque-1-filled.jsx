import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyslze34c.css';
import '../../css/t/tx0pfq7pv.css';
import '../../css/o/obcwls8yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyslze34c"/><path class="tx0pfq7pv"/><path class="obcwls8yd"/>`,
		"fallback": "tdesign:mosque-1-filled",
	});
}

export default Component;
