import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbvf_vbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbvf_vbsv"/>`,
		"fallback": "selfhst:prowlarr-dark",
	});
}

export default Component;
