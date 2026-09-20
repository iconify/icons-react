import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je-_wxchd.css';
import '../../css/s/s8vwhvbxd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="je-_wxchd"/><path class="s8vwhvbxd"/></g>`,
		"fallback": "streamline:travel-places-snorkle-diving-scuba-outdoor-recreation-ocean-mask-water-sea-snorkle",
	});
}

export default Component;
