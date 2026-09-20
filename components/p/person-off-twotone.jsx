import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axscvx.css';
import '../../css/g/g4wusq.css';
import '../../css/t/t5pxry.css';
import '../../css/p/p7_ytr.css';
import '../../css/e/eycklu.css';
import '../../css/g/grlnmu.css';
import '../../css/b/botfzx.css';
import '../../css/f/f59n3y.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-22.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5sm49cdz"><path class="axscvx g4wusq t5pxry"/><path class="g4wusq p7_ytr t5pxry"/><path class="eycklu grlnmu t5pxry"/></mask></defs><path mask="url(#SVG5sm49cdz)" class="botfzx"/><path class="eycklu f59n3y t5pxry"/>`,
		"fallback": "line-md:person-off-twotone",
	});
}

export default Component;
