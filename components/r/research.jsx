import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x9lk4hbii.css';
import '../../css/l/lhwrtz4ip.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="x9lk4hbii"/><path class="lhwrtz4ip"/></g>`,
		"fallback": "marketeq:research",
	});
}

export default Component;
