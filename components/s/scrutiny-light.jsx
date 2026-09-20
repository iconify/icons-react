import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvm2ckb5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvm2ckb5k"/>`,
		"fallback": "selfhst:scrutiny-light",
	});
}

export default Component;
