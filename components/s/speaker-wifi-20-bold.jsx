import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb8q1pmkh.css';
import '../../css/s/suvwyfb8m.css';
import '../../css/v/v57n--bcr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb8q1pmkh"/><path class="suvwyfb8m"/><path class="v57n--bcr"/>`,
		"fallback": "energy-icons:speaker-wifi-20-bold",
	});
}

export default Component;
