import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxlv3ga7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxlv3ga7f"/>`,
		"fallback": "fxemoji:pawprints",
	});
}

export default Component;
