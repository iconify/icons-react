import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuw8l2b8i.css';
import '../../css/g/gfgsw55so.css';
import '../../css/t/tb7rv_ivn.css';
import '../../css/n/n_sx7rycv.css';

const viewBox = {"width":1397,"height":632};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuw8l2b8i"/><path class="gfgsw55so"/><path class="tb7rv_ivn"/><path class="n_sx7rycv"/>`,
		"fallback": "thesvg-color:vib",
	});
}

export default Component;
