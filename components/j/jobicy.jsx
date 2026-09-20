import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdlzzib6u.css';
import '../../css/s/sdjm4xshj.css';
import '../../css/w/w1hlg-8aw.css';
import '../../css/n/n_3_ftbco.css';

const viewBox = {"width":587,"height":587};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tdlzzib6u"/><path clip-rule="evenodd" class="sdjm4xshj"/><path class="w1hlg-8aw"/><path clip-rule="evenodd" class="n_3_ftbco"/></g>`,
		"fallback": "thesvg-color:jobicy",
	});
}

export default Component;
