import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uid5ybegl.css';
import '../../css/f/fokopnbqa.css';
import '../../css/g/gqyaulbpw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uid5ybegl"/><path class="fokopnbqa"/><path class="gqyaulbpw"/>`,
		"fallback": "selfhst:microsoft-powerpoint-light",
	});
}

export default Component;
