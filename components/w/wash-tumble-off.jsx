import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pug-vqbqt.css';
import '../../css/v/vnh_nbb7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pug-vqbqt"/><path class="vnh_nbb7f"/></g>`,
		"fallback": "tabler:wash-tumble-off",
	});
}

export default Component;
