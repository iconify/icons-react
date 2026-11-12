import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b60gkfbaz.css';
import '../../css/g/gswqujbbb.css';
import '../../css/n/ngs8ap7cj.css';
import '../../css/q/qlqbkkclw.css';
import '../../css/v/v6s1k8bkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b60gkfbaz"/><path class="gswqujbbb"/><path class="ngs8ap7cj"/><path class="qlqbkkclw"/><path class="v6s1k8bkr"/>`,
		"fallback": "selfhst:macrumors",
	});
}

export default Component;
