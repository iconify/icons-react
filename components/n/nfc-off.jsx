import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mt7pr3ret.css';
import '../../css/k/k6zanzbjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mt7pr3ret"/><path class="k6zanzbjf"/></g>`,
		"fallback": "tabler:nfc-off",
	});
}

export default Component;
