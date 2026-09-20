import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gp1ku3j4j.css';
import '../../css/n/ncz363bav.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gp1ku3j4j"/><path class="ncz363bav"/></g>`,
		"fallback": "streamline:upload-box-1",
	});
}

export default Component;
