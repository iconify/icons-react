import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x1ja5160x.css';
import '../../css/n/no846196a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="x1ja5160x"/><rect class="no846196a"/></g>`,
		"fallback": "lucide:ungroup",
	});
}

export default Component;
