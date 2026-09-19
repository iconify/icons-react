import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxrp5pbhu.css';
import '../../css/z/zwkxfwbcx.css';
import '../../css/j/jgecn8b8w.css';
import '../../css/s/si615ccmd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dxrp5pbhu"><path class="zwkxfwbcx"/><path class="jgecn8b8w"/></g><path class="si615ccmd"/>`,
		"fallback": "flat-color-icons:rotate-camera",
	});
}

export default Component;
