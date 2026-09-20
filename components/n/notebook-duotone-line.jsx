import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/o/oxps9bbuf.css';
import '../../css/p/pzzg-sbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><rect class="oxps9bbuf"/><path class="pzzg-sbsi"/></g>`,
		"fallback": "lets-icons:notebook-duotone-line",
	});
}

export default Component;
