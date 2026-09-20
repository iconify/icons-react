import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/x0ejb5i8x.css';
import '../../css/t/tlrka-bsb.css';
import '../../css/p/pj_7kk18u.css';
import '../../css/r/r7vb4filw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="x0ejb5i8x"/><path class="tlrka-bsb"/><path class="pj_7kk18u"/><path class="r7vb4filw"/></g>`,
		"fallback": "streamline-sharp-color:user-feedback-heart",
	});
}

export default Component;
