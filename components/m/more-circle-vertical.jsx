import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/mei1fbbhq.css';
import '../../css/a/a4lo4k5_r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="mei1fbbhq"/><path class="a4lo4k5_r"/></g>`,
		"fallback": "marketeq:more-circle-vertical",
	});
}

export default Component;
