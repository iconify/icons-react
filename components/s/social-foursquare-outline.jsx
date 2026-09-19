import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc81c-b-o.css';
import '../../css/y/ymu2chbcz.css';
import '../../css/m/mvj4cdb7t.css';
import '../../css/t/t013kn23x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc81c-b-o"/><path class="ymu2chbcz"/><path class="mvj4cdb7t"/><path class="t013kn23x"/>`,
		"fallback": "ion:social-foursquare-outline",
	});
}

export default Component;
