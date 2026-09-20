import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/puenqchkl.css';
import '../../css/z/ztanc-rux.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="puenqchkl"/><circle class="ztanc-rux"/></g>`,
		"fallback": "streamline:interface-bookmark-tag-tags-bookmark-favorite",
	});
}

export default Component;
