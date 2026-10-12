import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwwz45hpf.css';
import '../../css/v/v_rtg2u6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwwz45hpf"/><path class="v_rtg2u6k"/>`,
		"fallback": "energy-icons:pill-bottle-48",
	});
}

export default Component;
