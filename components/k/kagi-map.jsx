import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ralt7bb2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ralt7bb2t"/>`,
		"fallback": "icon-park-outline:kagi-map",
	});
}

export default Component;
