import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n289phbfh.css';
import '../../css/l/lrh8l26vj.css';
import '../../css/a/akqahh3wn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n289phbfh"/><path class="lrh8l26vj"/><path class="akqahh3wn"/></g>`,
		"fallback": "streamline:interface-arrows-reload-1-arrows-load-arrow-sync-square-loading-reload-synchronize",
	});
}

export default Component;
