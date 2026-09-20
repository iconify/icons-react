import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/ocka8xbmv.css';
import '../../css/j/j6ojonbes.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="ocka8xbmv"/><path class="j6ojonbes"/><path class="a4lo4k5_r"/></g>`,
		"fallback": "marketeq:radius",
	});
}

export default Component;
