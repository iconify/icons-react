import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4c8pd5le.css';
import '../../css/c/clgeaqb1x.css';
import '../../css/y/yq8uffbya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4c8pd5le"/><path class="clgeaqb1x"/><path class="yq8uffbya"/>`,
		"fallback": "ion:logo-web-component",
	});
}

export default Component;
