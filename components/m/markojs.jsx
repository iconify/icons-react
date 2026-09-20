import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcwzz_b1o.css';
import '../../css/r/r1sr9thfn.css';
import '../../css/z/zsvi6ec3s.css';
import '../../css/o/ofukf3pkk.css';
import '../../css/u/u_y240b4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcwzz_b1o"/><path class="r1sr9thfn"/><path class="zsvi6ec3s"/><path class="ofukf3pkk"/><path class="u_y240b4s"/>`,
		"fallback": "material-icon-theme:markojs",
	});
}

export default Component;
