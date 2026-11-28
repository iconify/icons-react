import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxqmsz5mm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bxmd5va3c.css';
import '../../css/c/c7woc6bam.css';
import '../../css/q/qwe7xyill.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xxqmsz5mm"/><g class="dt0cm9dhy primary"><path class="bxmd5va3c"/><path class="c7woc6bam"/><path class="qwe7xyill"/></g>`,
		"fallback": "iconaut:telescope-duo",
	});
}

export default Component;
