import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2crgeb7t.css';
import '../../css/q/qwqwk1bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w2crgeb7t"/><path clip-rule="evenodd" class="qwqwk1bts"/>`,
		"fallback": "selfhst:nextcloudpi-dark",
	});
}

export default Component;
