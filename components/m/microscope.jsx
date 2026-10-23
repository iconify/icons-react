import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/u/uccc5nb8o.css';
import '../../css/g/g9i2q3b6u.css';
import '../../css/z/z9m8im_kj.css';
import '../../css/t/tuft43edv.css';
import '../../css/g/g8xohvkvu.css';
import '../../css/d/dy25q5drc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="uccc5nb8o"/><path class="g9i2q3b6u"/><path class="z9m8im_kj"/><path class="tuft43edv"/><path class="g8xohvkvu"/><path class="dy25q5drc"/></g>`,
		"fallback": "matita:microscope",
	});
}

export default Component;
