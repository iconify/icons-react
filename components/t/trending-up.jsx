import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/s/sbvydkbda.css';
import '../../css/p/p1bak0bui.css';
import '../../css/b/brb-xnbni.css';
import '../../css/c/cy1can-ko.css';
import '../../css/e/ed2aovbks.css';
import '../../css/k/kn6ik1w-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="sbvydkbda wm-shadow"/><path class="p1bak0bui"/><path class="brb-xnbni"/><path class="cy1can-ko"/><path class="ed2aovbks wm-shine"/><path class="kn6ik1w-e wm-deco"/></g>`,
		"fallback": "withicons-sticker:trending-up",
	});
}

export default Component;
