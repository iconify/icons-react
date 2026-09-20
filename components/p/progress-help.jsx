import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbojnipdz.css';
import '../../css/a/ag4zfg7zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tbojnipdz"/><path class="ag4zfg7zk"/></g>`,
		"fallback": "tabler:progress-help",
	});
}

export default Component;
