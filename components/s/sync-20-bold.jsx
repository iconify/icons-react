import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhav9abqv.css';
import '../../css/v/vr9pgqgei.css';
import '../../css/a/anr8_0bbn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhav9abqv"/><path class="vr9pgqgei"/><path class="anr8_0bbn"/>`,
		"fallback": "energy-icons:sync-20-bold",
	});
}

export default Component;
