import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5275jbym.css';
import '../../css/u/ugqbnn6ht.css';
import '../../css/j/ji04dtbnw.css';
import '../../css/m/mbpv4bb_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5275jbym"/><path class="ugqbnn6ht"/><path class="ji04dtbnw"/><path class="mbpv4bb_t"/>`,
		"fallback": "selfhst:microsoft-defender-2020-dark",
	});
}

export default Component;
