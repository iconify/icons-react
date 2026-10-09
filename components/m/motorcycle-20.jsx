import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv4lesbfb.css';
import '../../css/g/grzy5p8dw.css';
import '../../css/z/zz1xf7bjf.css';
import '../../css/t/tnr26c-cc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv4lesbfb"/><path class="grzy5p8dw"/><path class="zz1xf7bjf"/><path class="tnr26c-cc"/>`,
		"fallback": "energy-icons:motorcycle-20",
	});
}

export default Component;
