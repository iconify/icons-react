import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wab7z83xz.css';
import '../../css/t/t_-l--tcy.css';
import '../../css/c/colwxxpxh.css';
import '../../css/j/jb1ngkwzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="wab7z83xz"/><path class="t_-l--tcy"/><path class="colwxxpxh"/><path class="jb1ngkwzg"/></g>`,
		"fallback": "circle-flags:ve",
	});
}

export default Component;
