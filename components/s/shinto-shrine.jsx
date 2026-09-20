import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c33stpbjc.css';
import '../../css/a/a1-qyil8b.css';
import '../../css/v/vl_8m4bvp.css';
import '../../css/d/dxuto9-uf.css';
import '../../css/y/ymzf97azy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c33stpbjc"/><path class="a1-qyil8b"/><path class="vl_8m4bvp"/><path class="dxuto9-uf"/><path class="ymzf97azy"/>`,
		"fallback": "openmoji:shinto-shrine",
	});
}

export default Component;
