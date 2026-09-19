import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atoj6abie.css';
import '../../css/y/yo0y45bgr.css';
import '../../css/v/vcmsx7koy.css';
import '../../css/g/gsi6ambhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atoj6abie"/><path class="yo0y45bgr"/><path class="vcmsx7koy"/><path class="gsi6ambhf"/>`,
		"fallback": "ion:ios-toggle",
	});
}

export default Component;
