import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gia08_wyu.css';
import '../../css/d/dds3mezff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gia08_wyu"/><path class="dds3mezff"/></g>`,
		"fallback": "streamline-flex:watchtower-castle",
	});
}

export default Component;
