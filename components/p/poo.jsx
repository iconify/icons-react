import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b1sd7lz6r.css';
import '../../css/i/i2d7xd63i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b1sd7lz6r"/><path class="i2d7xd63i"/></g>`,
		"fallback": "tabler:poo",
	});
}

export default Component;
