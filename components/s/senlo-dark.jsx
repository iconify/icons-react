import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idolizczw.css';
import '../../css/d/dhkr_wblc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idolizczw"/><path class="dhkr_wblc"/>`,
		"fallback": "selfhst:senlo-dark",
	});
}

export default Component;
