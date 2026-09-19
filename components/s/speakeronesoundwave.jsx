import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh96yfr3m.css';
import '../../css/b/ba4pmswhb.css';
import '../../css/d/dzb76ub5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh96yfr3m"/><path class="ba4pmswhb"/><path class="dzb76ub5g"/>`,
		"fallback": "fxemoji:speakeronesoundwave",
	});
}

export default Component;
