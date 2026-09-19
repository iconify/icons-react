import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shykeihid.css';
import '../../css/o/ot-x0gcwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shykeihid"/><path class="ot-x0gcwc"/>`,
		"fallback": "carbon:kubernetes-operator",
	});
}

export default Component;
