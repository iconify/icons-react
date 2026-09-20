import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5g9u3bet.css';
import '../../css/m/mjlmy9wct.css';
import '../../css/z/zuvsqib3n.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/tjydqcbzf.css';
import '../../css/k/kxz5io7mt.css';
import '../../css/s/sw9p6_c0e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n5g9u3bet"/><path clip-rule="evenodd" class="mjlmy9wct"/><path class="zuvsqib3n"/><g class="brzn_0bpr"><ellipse class="tjydqcbzf"/><ellipse class="tjydqcbzf"/><path class="kxz5io7mt"/><path class="sw9p6_c0e"/></g>`,
		"fallback": "openmoji:opera",
	});
}

export default Component;
