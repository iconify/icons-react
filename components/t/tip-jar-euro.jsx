import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahasjgtyt.css';
import '../../css/g/g-h71gcju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ahasjgtyt"/><path class="g-h71gcju"/></g>`,
		"fallback": "tabler:tip-jar-euro",
	});
}

export default Component;
