import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oadbqx5tn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oadbqx5tn"/>`,
		"fallback": "selfhst:nodecosmos-dark",
	});
}

export default Component;
