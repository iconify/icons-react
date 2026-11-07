import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w7f1knbar.css';
import '../../css/v/vbhtlsbwa.css';
import '../../css/x/xerbjnbev.css';
import '../../css/s/seyob5b2q.css';
import '../../css/k/kop5qbcjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="w7f1knbar"/><path class="vbhtlsbwa"/><path class="xerbjnbev"/><path class="seyob5b2q"/><path class="kop5qbcjx"/></g>`,
		"fallback": "solar:magic-wand-3-broken",
	});
}

export default Component;
