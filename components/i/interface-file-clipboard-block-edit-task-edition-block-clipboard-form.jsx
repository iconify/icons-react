import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zqantbszc.css';
import '../../css/p/p2a1ulbei.css';
import '../../css/x/xishbgben.css';
import '../../css/y/yl_md4t5z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zqantbszc"/><rect class="p2a1ulbei"/><circle class="xishbgben"/><path class="yl_md4t5z"/></g>`,
		"fallback": "streamline:interface-file-clipboard-block-edit-task-edition-block-clipboard-form",
	});
}

export default Component;
