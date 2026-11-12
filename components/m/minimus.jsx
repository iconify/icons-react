import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arfxhzlpu.css';
import '../../css/o/oxu08acul.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arfxhzlpu"/><path class="oxu08acul"/>`,
		"fallback": "selfhst:minimus",
	});
}

export default Component;
