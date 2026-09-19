import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8fvisblt.css';
import '../../css/t/t-o-xlbsw.css';
import '../../css/p/pyphtmbif.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8fvisblt"/><path class="t-o-xlbsw"/><path class="pyphtmbif"/>`,
		"fallback": "ei:pencil",
	});
}

export default Component;
