import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xxswp1bkt.css';
import '../../css/h/h8y-n3_nj.css';
import '../../css/g/gn_7n3t9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xxswp1bkt"/><path class="h8y-n3_nj"/><path class="gn_7n3t9u"/></g>`,
		"fallback": "reicon:shop-remove",
	});
}

export default Component;
