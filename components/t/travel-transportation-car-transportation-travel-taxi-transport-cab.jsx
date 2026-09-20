import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gp2hsub5r.css';
import '../../css/p/pmt1unbmx.css';
import '../../css/i/i-6ka3ruo.css';
import '../../css/b/bqkj-hxcu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gp2hsub5r"/><circle class="pmt1unbmx"/><circle class="i-6ka3ruo"/><path class="bqkj-hxcu"/></g>`,
		"fallback": "streamline:travel-transportation-car-transportation-travel-taxi-transport-cab",
	});
}

export default Component;
