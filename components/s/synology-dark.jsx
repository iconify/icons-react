import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbnd3dbpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbnd3dbpb"/>`,
		"fallback": "selfhst:synology-dark",
	});
}

export default Component;
