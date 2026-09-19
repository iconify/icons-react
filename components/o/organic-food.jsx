import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s05wpbmma.css';
import '../../css/c/c02oifziy.css';
import '../../css/v/vi5kufb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s05wpbmma"/><path class="c02oifziy"/><path class="vi5kufb7f"/></g>`,
		"fallback": "hugeicons:organic-food",
	});
}

export default Component;
