import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-au2bijw.css';
import '../../css/j/jv20dbsyk.css';
import '../../css/i/ijutckbcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-au2bijw"/><path class="jv20dbsyk"/><path class="ijutckbcg"/>`,
		"fallback": "selfhst:microsoft-forms-light",
	});
}

export default Component;
