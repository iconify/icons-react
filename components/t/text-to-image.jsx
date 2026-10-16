import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5q-rqbde.css';
import '../../css/v/vzzjg9brc.css';
import '../../css/p/potfkcbne.css';
import '../../css/z/z7vfwiebf.css';
import '../../css/t/t5xkztbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5q-rqbde"/><path class="vzzjg9brc"/><rect class="potfkcbne"/><path class="z7vfwiebf"/><path class="t5xkztbju"/></g>`,
		"fallback": "andrsrxn:text-to-image",
	});
}

export default Component;
