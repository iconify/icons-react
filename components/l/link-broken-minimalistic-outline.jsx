import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrx842ghz.css';
import '../../css/b/bn7lz4bua.css';
import '../../css/q/qs-2wmzej.css';
import '../../css/w/wg-y_1byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrx842ghz"/><path class="bn7lz4bua"/><path class="qs-2wmzej"/><path class="wg-y_1byw"/>`,
		"fallback": "solar:link-broken-minimalistic-outline",
	});
}

export default Component;
