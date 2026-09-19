import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkpc5jbgg.css';
import '../../css/p/phkynijtd.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/r/rd_oh8biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkpc5jbgg"/><path class="phkynijtd"/><circle class="d1ym2h3ya"/><path class="rd_oh8biv"/>`,
		"fallback": "eos-icons:machine-learning-outlined",
	});
}

export default Component;
