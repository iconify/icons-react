import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/arsexybrm.css';
import '../../css/k/kjxxg2bjk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="arsexybrm"/><path class="kjxxg2bjk"/></g>`,
		"fallback": "streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing",
	});
}

export default Component;
