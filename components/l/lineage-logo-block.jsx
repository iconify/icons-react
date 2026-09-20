import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxl1wqb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bxl1wqb_p"/>`,
		"fallback": "streamline-logos:lineage-logo-block",
	});
}

export default Component;
