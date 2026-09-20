import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gn52r3sds.css';
import '../../css/x/x53tttbux.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gn52r3sds"/><path class="x53tttbux"/></g>`,
		"fallback": "streamline:interface-edit-view-off-disable-eye-eyeball-hide-off-view",
	});
}

export default Component;
