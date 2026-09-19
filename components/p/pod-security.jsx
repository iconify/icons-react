import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrfp4-bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrfp4-bpi"/>`,
		"fallback": "eos-icons:pod-security",
	});
}

export default Component;
