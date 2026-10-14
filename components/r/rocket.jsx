import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/u5pbbgb8j.css';
import '../../css/m/md4h7gdey.css';
import '../../css/e/e2anb5b5z.css';
import '../../css/z/zoo917bbd.css';
import '../../css/g/gmqu67b-k.css';
import '../../css/w/wq8lo3b0z.css';
import '../../css/z/z_j_yfuin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="u5pbbgb8j"/><path class="md4h7gdey"/><path class="e2anb5b5z"/><path class="zoo917bbd"/><path class="gmqu67b-k"/><path class="wq8lo3b0z"/><path class="z_j_yfuin"/></g>`,
		"fallback": "matita:rocket",
	});
}

export default Component;
