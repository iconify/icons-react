import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djm_3-bud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="djm_3-bud"/>`,
		"fallback": "pajamas:location",
	});
}

export default Component;
