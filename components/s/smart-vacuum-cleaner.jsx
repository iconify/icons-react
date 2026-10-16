import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esihocb4q.css';
import '../../css/s/sdt7y8blq.css';
import '../../css/k/ktefacb6t.css';
import '../../css/b/bbc930blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="esihocb4q"/><circle transform="rotate(180 11.97 12)" class="sdt7y8blq"/><circle transform="rotate(180 11.97 14.73)" class="ktefacb6t"/><path class="bbc930blm"/></g>`,
		"fallback": "andrsrxn:smart-vacuum-cleaner",
	});
}

export default Component;
