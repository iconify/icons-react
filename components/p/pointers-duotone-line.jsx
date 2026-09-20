import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p03u_bbuh.css';
import '../../css/r/rpivlejjt.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLWB7qesQ"><g class="ft5dv1b6b"><path class="p03u_bbuh"/><path class="rpivlejjt"/></g></mask></defs><path mask="url(#SVGLWB7qesQ)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:pointers-duotone-line",
	});
}

export default Component;
