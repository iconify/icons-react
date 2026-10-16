import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubj09gbel.css';
import '../../css/j/jutb9bbnv.css';
import '../../css/b/b9g-2_b0b.css';
import '../../css/h/hf27v6bld.css';
import '../../css/g/ghlpjzi4r.css';
import '../../css/x/xd5t-tbiy.css';
import '../../css/p/pwt-u_b8x.css';
import '../../css/g/gq84c71iz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubj09gbel"/><path class="jutb9bbnv"/><path class="b9g-2_b0b"/><path class="hf27v6bld"/><path class="ghlpjzi4r"/><path class="xd5t-tbiy"/><path class="pwt-u_b8x"/><path class="gq84c71iz"/>`,
		"fallback": "energy-icons:solar-facade-20-bold",
	});
}

export default Component;
