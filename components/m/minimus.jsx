import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arfxhzlpu.css';
import '../../css/l/ludlzds-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arfxhzlpu"/><path class="ludlzds-g"/>`,
		"fallback": "selfhst:minimus",
	});
}

export default Component;
