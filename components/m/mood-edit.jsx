import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/djp69qm9q.css';
import '../../css/m/mfdvrmb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="djp69qm9q"/><path class="mfdvrmb7f"/></g>`,
		"fallback": "tabler:mood-edit",
	});
}

export default Component;
