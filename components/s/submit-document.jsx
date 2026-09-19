import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gfn2cjbgm.css';
import '../../css/r/r06qfdbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gfn2cjbgm"/><path class="r06qfdbgn"/></g>`,
		"fallback": "iconoir:submit-document",
	});
}

export default Component;
