import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fhidjrbks.css';
import '../../css/o/ocka8xbmv.css';
import '../../css/e/e9_m8lzcu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fhidjrbks"/><path class="ocka8xbmv"/><path class="e9_m8lzcu"/></g>`,
		"fallback": "marketeq:settings-alt-5",
	});
}

export default Component;
