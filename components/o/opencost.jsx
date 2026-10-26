import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3cxm91zu.css';
import '../../css/a/a_eyrr9hx.css';
import '../../css/v/vixh94iqf.css';
import '../../css/b/bdwo6acak.css';
import '../../css/g/g018e2xmc.css';

const viewBox = {"width":905,"height":822};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3cxm91zu"/><path class="a_eyrr9hx"/><path class="vixh94iqf"/><path class="bdwo6acak"/><path class="g018e2xmc"/>`,
		"fallback": "thesvg:opencost",
	});
}

export default Component;
