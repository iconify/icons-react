import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svidcsblb.css';
import '../../css/v/v744t56bw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svidcsblb"/><path class="v744t56bw"/>`,
		"fallback": "selfhst:voidauth-dark",
	});
}

export default Component;
