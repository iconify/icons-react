import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/anbjzdbfr.css';
import '../../css/y/ywbtlwciv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="anbjzdbfr"/><path class="ywbtlwciv"/></g>`,
		"fallback": "tabler:lock-open-2",
	});
}

export default Component;
