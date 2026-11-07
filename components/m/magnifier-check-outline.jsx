import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkozawy4w.css';
import '../../css/b/b0mwi-brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkozawy4w"/><path clip-rule="evenodd" class="b0mwi-brc"/>`,
		"fallback": "solar:magnifier-check-outline",
	});
}

export default Component;
