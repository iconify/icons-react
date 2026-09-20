import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsdbu57tf.css';
import '../../css/r/rz0vntz2v.css';
import '../../css/s/soc2sjb8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsdbu57tf"/><path class="rz0vntz2v"/><path class="soc2sjb8d"/>`,
		"fallback": "selfhst:kamiyomu",
	});
}

export default Component;
