import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n3e02zdfi.css';
import '../../css/a/aggenkmem.css';
import '../../css/y/ywie0coey.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="n3e02zdfi"/><circle class="aggenkmem"/><path class="ywie0coey"/></g>`,
		"fallback": "streamline:travel-places-painting-painting-entertainment-display-museum-event-hobby-exhibit",
	});
}

export default Component;
