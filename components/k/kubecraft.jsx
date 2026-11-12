import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uky84zbnb.css';
import '../../css/e/ezzt541et.css';
import '../../css/p/ppsz4hbwg.css';
import '../../css/e/eldq07ydi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uky84zbnb"/><path class="ezzt541et"/><path class="ppsz4hbwg"/><path class="eldq07ydi"/>`,
		"fallback": "selfhst:kubecraft",
	});
}

export default Component;
