import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m9a5-0b2o.css';
import '../../css/u/umeavacvv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m9a5-0b2o"/><path class="umeavacvv"/></g>`,
		"fallback": "streamline:interface-content-save-disk-floppy-electronics-device-disc-computer",
	});
}

export default Component;
