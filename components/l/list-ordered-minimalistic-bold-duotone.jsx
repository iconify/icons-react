import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/o/o7greeb4r.css';
import '../../css/p/pgsx8ub-o.css';
import '../../css/z/zngrk6exs.css';
import '../../css/w/wp85bwqhm.css';
import '../../css/e/e6mrdirfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="o7greeb4r"/><path class="pgsx8ub-o"/><path class="zngrk6exs"/></g><path class="wp85bwqhm"/><path class="e6mrdirfz"/>`,
		"fallback": "solar:list-ordered-minimalistic-bold-duotone",
	});
}

export default Component;
