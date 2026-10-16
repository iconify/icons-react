import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh4vbpr-i.css';
import '../../css/d/dq961ejjd.css';
import '../../css/t/tdesojbkc.css';
import '../../css/n/ngtmo646m.css';
import '../../css/p/phh1iozuu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh4vbpr-i"/><path class="dq961ejjd"/><path class="tdesojbkc"/><path class="ngtmo646m"/><path class="phh1iozuu"/>`,
		"fallback": "energy-icons:water-pump-20",
	});
}

export default Component;
