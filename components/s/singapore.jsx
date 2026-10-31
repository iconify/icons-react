import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr8ohcc6r.css';
import '../../css/g/gsazuob2v.css';
import '../../css/y/ytm2n1ogb.css';
import '../../css/s/snk62fbar.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr8ohcc6r"/><path class="gsazuob2v"/><path class="ytm2n1ogb"/><path class="snk62fbar"/>`,
		"fallback": "tabler-flags:singapore",
	});
}

export default Component;
