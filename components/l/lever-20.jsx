import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0ni6vb5b.css';
import '../../css/t/tyv6bwbtz.css';
import '../../css/a/ag5d8ub9y.css';
import '../../css/i/ijbr7jekk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0ni6vb5b"/><path class="tyv6bwbtz"/><path class="ag5d8ub9y"/><path class="ijbr7jekk"/>`,
		"fallback": "energy-icons:lever-20",
	});
}

export default Component;
