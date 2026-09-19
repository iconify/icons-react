import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz_yl0efk.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n-3hlxbsn.css';
import '../../css/g/geesqhbwg.css';
import '../../css/x/xmogy0_2h.css';
import '../../css/h/hd7l-yb7d.css';
import '../../css/h/hedj3bbrm.css';
import '../../css/v/v1e3x9bmh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="iconify-hCy3ce7G" clip-rule="evenodd" class="lz_yl0efk"/></defs><g class="ft5dv1b6b"><use href="#iconify-hCy3ce7G" clip-rule="evenodd" class="n-3hlxbsn"/><path clip-rule="evenodd" class="geesqhbwg"/><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/><use href="#iconify-hCy3ce7G" clip-rule="evenodd" class="n-3hlxbsn"/><path clip-rule="evenodd" class="v1e3x9bmh"/><circle class="xmogy0_2h"/><circle class="hd7l-yb7d"/><circle class="hedj3bbrm"/></g>`,
		"fallback": "pepicons:text-bubble-print",
	});
}

export default Component;
