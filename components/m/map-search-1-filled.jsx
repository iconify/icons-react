import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ihi-nli.css';
import '../../css/r/rb93hspbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ihi-nli"/><path class="rb93hspbh"/>`,
		"fallback": "tdesign:map-search-1-filled",
	});
}

export default Component;
