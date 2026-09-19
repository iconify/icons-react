import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcf6q5bzc.css';
import '../../css/u/u3-ln7b6t.css';
import '../../css/p/pz8h41ktd.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/z/z07hzq4rk.css';
import '../../css/f/fefg1rt_y.css';
import '../../css/d/dygyyv64v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcf6q5bzc"/><circle class="u3-ln7b6t"/><path class="pz8h41ktd"/><path class="o6g1-kwkw"/><path class="z07hzq4rk"/><path class="fefg1rt_y"/><path class="dygyyv64v"/>`,
		"fallback": "fxemoji:orangebook",
	});
}

export default Component;
