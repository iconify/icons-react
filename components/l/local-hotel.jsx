import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7kl-imdl.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7kl-imdl"/>`,
		"fallback": "zmdi:local-hotel",
	});
}

export default Component;
