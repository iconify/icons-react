import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sg98nbbyd.css';
import '../../css/g/gzyupn04a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sg98nbbyd"/><path class="gzyupn04a"/></g>`,
		"fallback": "streamline:nature-ecology-tree-1-tree-plant-pine-triangle-park",
	});
}

export default Component;
