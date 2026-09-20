import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2dud7gav.css';
import '../../css/k/kfcxw6ofm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2dud7gav"/><path class="kfcxw6ofm"/>`,
		"fallback": "stash:pin-location-duotone",
	});
}

export default Component;
