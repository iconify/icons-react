import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z4e8hzfxe.css';
import '../../css/k/k_jl23bmh.css';
import '../../css/v/vonc9acpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z4e8hzfxe"/><path class="k_jl23bmh"/><path class="vonc9acpk"/></g>`,
		"fallback": "streamline-freehand:server-edit",
	});
}

export default Component;
