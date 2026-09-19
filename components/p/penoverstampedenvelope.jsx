import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbk9e4bvj.css';
import '../../css/u/um8s3tx9x.css';
import '../../css/p/pexcy38ow.css';
import '../../css/z/zm92hgred.css';
import '../../css/m/miqwrbcoi.css';
import '../../css/v/vylzxxy2d.css';
import '../../css/q/q8r11-i9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbk9e4bvj"/><path class="um8s3tx9x"/><path class="pexcy38ow"/><path class="zm92hgred"/><path class="miqwrbcoi"/><path class="vylzxxy2d"/><path class="q8r11-i9p"/>`,
		"fallback": "fxemoji:penoverstampedenvelope",
	});
}

export default Component;
