import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifo9zfbnz.css';
import '../../css/z/zhoth9btb.css';
import '../../css/p/p5qfpwqcv.css';
import '../../css/z/ztaoll0si.css';
import '../../css/i/ilt-swa-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifo9zfbnz"/><path class="zhoth9btb"/><path class="p5qfpwqcv"/><path class="ztaoll0si"/><path class="ilt-swa-p"/>`,
		"fallback": "solar:translation-bold",
	});
}

export default Component;
