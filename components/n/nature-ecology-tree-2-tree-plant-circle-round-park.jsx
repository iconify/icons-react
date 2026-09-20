import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gzyupn04a.css';
import '../../css/p/prod96b7v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gzyupn04a"/><circle class="prod96b7v"/></g>`,
		"fallback": "streamline:nature-ecology-tree-2-tree-plant-circle-round-park",
	});
}

export default Component;
