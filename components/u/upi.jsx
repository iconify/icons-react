import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1_wl1bof.css';
import '../../css/g/gy0vq6mnp.css';
import '../../css/m/mjweazb7i.css';
import '../../css/g/gj-cykbml.css';
import '../../css/a/axtcofbkw.css';

const viewBox = {"width":432,"height":216};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1_wl1bof"/><path class="gy0vq6mnp"/><path class="mjweazb7i"/><path class="gj-cykbml"/><path class="axtcofbkw"/>`,
		"fallback": "thesvg-color:upi",
	});
}

export default Component;
