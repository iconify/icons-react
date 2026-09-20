import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lbkrd-xal.css';
import '../../css/g/g5s-gbb2c.css';
import '../../css/z/znpcm8eop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="lbkrd-xal"/><path class="g5s-gbb2c"/><path class="znpcm8eop"/></g>`,
		"fallback": "streamline-cyber:location-pin-direction-3",
	});
}

export default Component;
