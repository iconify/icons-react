import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxr-42qbg.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxr-42qbg"/>`,
		"fallback": "fa6-solid:person-circle-xmark",
	});
}

export default Component;
