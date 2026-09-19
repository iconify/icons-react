import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/z/ziesqi8ao.css';
import '../../css/u/ug0o9qbnm.css';
import '../../css/x/xkhobpbzz.css';
import '../../css/y/ybkj5o_sj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ziesqi8ao"/><path class="ug0o9qbnm"/><path class="xkhobpbzz"/><path class="ybkj5o_sj"/></g>`,
		"fallback": "circle-flags:ly",
	});
}

export default Component;
