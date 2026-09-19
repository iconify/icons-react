import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzhc1vhit.css';
import '../../css/f/fiyyqmf7i.css';
import '../../css/u/uuvohyb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzhc1vhit"/><path clip-rule="evenodd" class="fiyyqmf7i"/><path clip-rule="evenodd" class="uuvohyb7d"/>`,
		"fallback": "bitcoin-icons:podcast-filled",
	});
}

export default Component;
