import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lugbcbdit.css';
import '../../css/n/n-5zhebym.css';
import '../../css/o/o3p8_abkq.css';
import '../../css/a/akwx2u1sy.css';
import '../../css/g/gp89tkdrk.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lugbcbdit"/><path class="n-5zhebym"/><path class="o3p8_abkq"/><marker id="SVGEq3dreKJ" markerHeight="30" markerWidth="30"><path class="akwx2u1sy"/></marker><path marker-mid="url(#SVGEq3dreKJ)" class="gp89tkdrk"/>`,
		"fallback": "flag:us-4x3",
	});
}

export default Component;
