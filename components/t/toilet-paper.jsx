import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/is73mv3sa.css';
import '../../css/i/iu5k3lbda.css';
import '../../css/b/bql__rbzk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="is73mv3sa"/><path class="iu5k3lbda"/><path class="bql__rbzk"/></g>`,
		"fallback": "marketeq:toilet-paper",
	});
}

export default Component;
