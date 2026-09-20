import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o77xpg-2g.css';
import '../../css/c/c17guec_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(-45 8.498 5.5)" class="o77xpg-2g"/><path class="c17guec_w"/></g>`,
		"fallback": "streamline:interface-setting-hammer-construction-hammer-mallet-tool-tools-setting-edit-adjust",
	});
}

export default Component;
