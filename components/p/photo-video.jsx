import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kfh5_8bnz.css';
import '../../css/k/kekpz8b2z.css';
import '../../css/b/bxseec__t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kfh5_8bnz"/><path class="kekpz8b2z"/><path class="bxseec__t"/></g>`,
		"fallback": "tabler:photo-video",
	});
}

export default Component;
