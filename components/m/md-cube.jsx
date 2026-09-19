import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjnbpgbsn.css';
import '../../css/f/fd5cwebhy.css';
import '../../css/h/h5uul4bth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjnbpgbsn"/><path class="fd5cwebhy"/><path class="h5uul4bth"/>`,
		"fallback": "ion:md-cube",
	});
}

export default Component;
