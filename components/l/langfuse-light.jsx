import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqhne00dm.css';
import '../../css/o/osppluy1u.css';
import '../../css/n/nlzj7hb0x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqhne00dm"/><path class="osppluy1u"/><path class="nlzj7hb0x"/>`,
		"fallback": "selfhst:langfuse-light",
	});
}

export default Component;
