import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/re_3czw2d.css';
import '../../css/h/hb5frye-n.css';
import '../../css/g/gnawts8ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="re_3czw2d"/><path class="hb5frye-n"/><path class="gnawts8ku"/></g>`,
		"fallback": "hugeicons:washing-machine",
	});
}

export default Component;
