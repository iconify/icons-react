import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m21fiubni.css';
import '../../css/j/j3h0ykbux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m21fiubni"/><path class="j3h0ykbux"/>`,
		"fallback": "selfhst:pufferpanel",
	});
}

export default Component;
