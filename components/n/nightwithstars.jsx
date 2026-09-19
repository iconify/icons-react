import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvuwh_b1o.css';
import '../../css/s/sco41b1mo.css';
import '../../css/k/ku0gyybci.css';
import '../../css/b/b72jh0c6g.css';
import '../../css/o/orrftzb-f.css';
import '../../css/f/f0745kbqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvuwh_b1o"/><path class="sco41b1mo"/><path class="ku0gyybci"/><path class="b72jh0c6g"/><path class="orrftzb-f"/><path class="f0745kbqm"/>`,
		"fallback": "fxemoji:nightwithstars",
	});
}

export default Component;
