import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uphte4bua.css';
import '../../css/w/wcqmlfg5a.css';
import '../../css/l/l2w1qhbgy.css';
import '../../css/c/c3xzvutzh.css';
import '../../css/l/lj_74133m.css';
import '../../css/d/dy8mjytec.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uphte4bua"/><path class="wcqmlfg5a"/><path class="l2w1qhbgy"/><path class="c3xzvutzh"/><path class="lj_74133m"/><path class="dy8mjytec"/>`,
		"fallback": "energy-icons:jacket-foundation-20",
	});
}

export default Component;
