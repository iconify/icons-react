import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/p/pnekmprlh.css';
import '../../css/s/s984uab_t.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG6nQl3b2l"><g class="o58hkebvg"><path class="pnekmprlh"/><path class="s984uab_t"/></g></mask></defs><path mask="url(#SVG6nQl3b2l)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:ring-duotone-line",
	});
}

export default Component;
