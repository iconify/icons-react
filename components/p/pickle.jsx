import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_ww1b5bt.css';
import '../../css/j/jzfr30_8j.css';
import '../../css/o/o-vyhsb3e.css';
import '../../css/p/pn-1l3b2w.css';
import '../../css/v/veq-9ejzg.css';
import '../../css/j/jn06in7ce.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_ww1b5bt"/><path class="jzfr30_8j"/><path class="o-vyhsb3e"/><circle class="pn-1l3b2w"/><circle class="veq-9ejzg"/><path class="jn06in7ce"/>`,
		"fallback": "openmoji:pickle",
	});
}

export default Component;
