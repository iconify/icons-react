import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwqf32bdv.css';
import '../../css/u/u48ityuik.css';
import '../../css/v/vxml6xbqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwqf32bdv"/><path class="u48ityuik"/><path class="vxml6xbqr"/>`,
		"fallback": "stash:radar",
	});
}

export default Component;
