import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j043xib2y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1lla06nf.css';
import '../../css/k/kyqmb2bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j043xib2y secondary"/><g class="dt0cm9dhy primary"><path class="m1lla06nf"/><path class="kyqmb2bam"/></g>`,
		"fallback": "iconaut:shell-duo",
	});
}

export default Component;
