import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1e8thrft.css';
import '../../css/v/v_shcmxcg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1e8thrft"/><path class="v_shcmxcg"/>`,
		"fallback": "selfhst:posteria-dark",
	});
}

export default Component;
