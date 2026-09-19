import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3kcg8i2c.css';
import '../../css/g/g66qwwz6k.css';
import '../../css/g/gme-_ybfq.css';
import '../../css/c/cq3e4vbsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3kcg8i2c"/><path class="g66qwwz6k"/><path class="gme-_ybfq"/><path class="cq3e4vbsx"/>`,
		"fallback": "fxemoji:railwaycar",
	});
}

export default Component;
