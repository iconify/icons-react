import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xv9fbxk.css';
import '../../css/o/o62a0f6-k.css';
import '../../css/k/key6ijb9f.css';
import '../../css/s/sx9y9xbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xv9fbxk wm-k"/><path class="o62a0f6-k wm-k"/><path class="key6ijb9f wm-s"/><path class="sx9y9xbyo wm-s"/>`,
		"fallback": "withicons-bauhaus:phone-missed",
	});
}

export default Component;
