import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/ny6ypt60f.css';
import '../../css/t/tuwrzibkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ny6ypt60f"/><path class="tuwrzibkf"/></g>`,
		"fallback": "streamline-ultimate:shipment-upload-information",
	});
}

export default Component;
