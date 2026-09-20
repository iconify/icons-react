import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bht_f5brj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bht_f5brj"/>`,
		"fallback": "selfhst:velero-light",
	});
}

export default Component;
