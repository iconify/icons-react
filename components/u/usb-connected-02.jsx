import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yfmftrtcq.css';
import '../../css/s/s3sauobxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yfmftrtcq"/><path class="s3sauobxa"/></g>`,
		"fallback": "hugeicons:usb-connected-02",
	});
}

export default Component;
