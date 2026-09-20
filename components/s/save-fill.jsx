import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhysjpbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bhysjpbzy"/>`,
		"fallback": "lets-icons:save-fill",
	});
}

export default Component;
