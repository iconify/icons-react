import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb9hcvbsg.css';
import '../../css/n/n28q9qbfx.css';
import '../../css/l/lbw0b8b1k.css';
import '../../css/l/lvrhn6scz.css';
import '../../css/s/sd4bh2f7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb9hcvbsg"/><path class="n28q9qbfx"/><path class="lbw0b8b1k"/><path class="lvrhn6scz"/><path class="sd4bh2f7g"/>`,
		"fallback": "energy-icons:rewilding-20",
	});
}

export default Component;
