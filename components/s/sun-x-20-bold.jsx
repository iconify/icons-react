import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwjp_wt2n.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/f/fk_ahtbzo.css';
import '../../css/b/b325a1bje.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwjp_wt2n"/><path class="aqsnv9bnd"/><path class="fk_ahtbzo"/><path class="b325a1bje"/>`,
		"fallback": "energy-icons:sun-x-20-bold",
	});
}

export default Component;
