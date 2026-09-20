import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cqg1h5bow.css';
import '../../css/i/iihv7544v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="cqg1h5bow"/><path class="iihv7544v"/></g>`,
		"fallback": "streamline-flex:keyboard",
	});
}

export default Component;
