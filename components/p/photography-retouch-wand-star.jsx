import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq3kdq88n.css';
import '../../css/u/u9_e86k9a.css';
import '../../css/w/wvx4owb7n.css';
import '../../css/z/z2_t2m5aa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq3kdq88n"/><path class="u9_e86k9a"/><path class="wvx4owb7n"/><path class="z2_t2m5aa"/>`,
		"fallback": "streamline-pixel:photography-retouch-wand-star",
	});
}

export default Component;
