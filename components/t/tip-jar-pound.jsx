import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kukdg741y.css';
import '../../css/m/maw294_tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kukdg741y"/><path class="maw294_tt"/></g>`,
		"fallback": "tabler:tip-jar-pound",
	});
}

export default Component;
