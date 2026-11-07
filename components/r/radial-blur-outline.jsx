import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foppfvvnb.css';
import '../../css/a/asobz9bfl.css';
import '../../css/a/a54ie4buw.css';
import '../../css/q/qtq23zblq.css';
import '../../css/e/ez_n_f4qx.css';
import '../../css/w/wz3bvnbwx.css';
import '../../css/i/inzmoub2i.css';
import '../../css/t/t9jbbjbfm.css';
import '../../css/p/pwqbfebks.css';
import '../../css/l/lhkqaow_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="foppfvvnb"/><path clip-rule="evenodd" class="asobz9bfl"/><path class="a54ie4buw"/><path class="qtq23zblq"/><path class="ez_n_f4qx"/><path class="wz3bvnbwx"/><path class="inzmoub2i"/><path class="t9jbbjbfm"/><path class="pwqbfebks"/><path class="lhkqaow_i"/>`,
		"fallback": "solar:radial-blur-outline",
	});
}

export default Component;
