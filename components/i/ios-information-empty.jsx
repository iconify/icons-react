import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6ovpccxr.css';
import '../../css/q/qume8ab4m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="p6ovpccxr"/><path class="qume8ab4m"/>`,
		"fallback": "ion:ios-information-empty",
	});
}

export default Component;
