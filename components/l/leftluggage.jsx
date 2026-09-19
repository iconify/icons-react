import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4xf1bb5l.css';
import '../../css/r/r8hexeb-r.css';
import '../../css/h/hdw31irlx.css';
import '../../css/d/de8_fhm8h.css';
import '../../css/v/vi_4uu_xj.css';
import '../../css/s/s0-r01lyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4xf1bb5l"/><path class="r8hexeb-r"/><path class="hdw31irlx"/><path class="de8_fhm8h"/><path class="vi_4uu_xj"/><circle class="s0-r01lyq"/>`,
		"fallback": "fxemoji:leftluggage",
	});
}

export default Component;
