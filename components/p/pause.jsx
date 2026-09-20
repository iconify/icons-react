import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qgqv1ufxo.css';
import '../../css/s/sjdg-k99j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="icon-tabler nrj6p8qat"><rect class="qgqv1ufxo"/><rect class="sjdg-k99j"/></g>`,
		"fallback": "tabler:pause",
	});
}

export default Component;
