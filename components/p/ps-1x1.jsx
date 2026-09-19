import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh_zu2l2j.css';
import '../../css/n/ndyez317g.css';
import '../../css/u/uh8eay1ng.css';
import '../../css/l/l_-pi6evi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh_zu2l2j"/><path class="ndyez317g"/><path class="uh8eay1ng"/><path class="l_-pi6evi"/>`,
		"fallback": "flag:ps-1x1",
	});
}

export default Component;
