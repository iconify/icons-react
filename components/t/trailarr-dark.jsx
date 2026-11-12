import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnhbskd2a.css';
import '../../css/s/s7sodr5-h.css';
import '../../css/z/zji9g8ohv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnhbskd2a"/><path class="s7sodr5-h"/><path class="zji9g8ohv"/>`,
		"fallback": "selfhst:trailarr-dark",
	});
}

export default Component;
