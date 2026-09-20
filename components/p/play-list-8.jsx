import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arn-f-bpt.css';
import '../../css/p/pzkyy6i0j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="arn-f-bpt"/><path class="pzkyy6i0j"/></g>`,
		"fallback": "streamline:play-list-8",
	});
}

export default Component;
