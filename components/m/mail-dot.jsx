import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xd5kflbch.css';
import '../../css/c/c8oi8ccvi.css';
import '../../css/y/yu5hcsbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xd5kflbch"/><path class="c8oi8ccvi"/><circle class="yu5hcsbzy"/></g>`,
		"fallback": "lucide:mail-dot",
	});
}

export default Component;
