import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zva1xr5is.css';
import '../../css/f/fwxhzyd4r.css';
import '../../css/l/l0jzagv7s.css';
import '../../css/v/v22u0dbhu.css';
import '../../css/n/nb11n_b8l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zva1xr5is"/><path class="fwxhzyd4r"/><path class="l0jzagv7s"/><path class="v22u0dbhu"/><circle class="nb11n_b8l"/></g>`,
		"fallback": "glyphs:planet-moon",
	});
}

export default Component;
