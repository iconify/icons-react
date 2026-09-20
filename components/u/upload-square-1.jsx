import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgizmrbfg.css';
import '../../css/m/mgd4ipbpf.css';
import '../../css/f/f-m8iibep.css';
import '../../css/a/ar8rmhbhu.css';
import '../../css/s/sru-2nuqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgizmrbfg"/><path class="mgd4ipbpf"/><path class="f-m8iibep"/><path class="ar8rmhbhu"/><path class="sru-2nuqu"/></g>`,
		"fallback": "streamline-ultimate-color:upload-square-1",
	});
}

export default Component;
