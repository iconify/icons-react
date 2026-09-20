import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ajof9_b6k.css';
import '../../css/z/z2lev-8dk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ajof9_b6k"/><path class="z2lev-8dk"/></g>`,
		"fallback": "streamline:interface-bookmark-double-bookmarks-double-tags-favorite",
	});
}

export default Component;
