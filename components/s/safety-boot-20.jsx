import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3tl7xpsr.css';
import '../../css/t/t8tzpkb5n.css';
import '../../css/a/a196s7ber.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3tl7xpsr"/><path class="t8tzpkb5n"/><path class="a196s7ber"/>`,
		"fallback": "energy-icons:safety-boot-20",
	});
}

export default Component;
