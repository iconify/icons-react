import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kibnv3f1k.css';
import '../../css/n/nfl8imb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kibnv3f1k"/><path class="nfl8imb0d"/></g>`,
		"fallback": "tabler:tags-chevron-left",
	});
}

export default Component;
