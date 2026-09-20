import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fltvq2btj.css';
import '../../css/f/f8zfg8btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fltvq2btj"/><path class="f8zfg8btv"/></g>`,
		"fallback": "tabler:u-turn-left",
	});
}

export default Component;
