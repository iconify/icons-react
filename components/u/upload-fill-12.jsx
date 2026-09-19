import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbihz6m0j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbihz6m0j"/>`,
		"fallback": "garden:upload-fill-12",
	});
}

export default Component;
