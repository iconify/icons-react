import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lae2_dgov.css';
import '../../css/a/ah8_uokdg.css';
import '../../css/n/nunhi4evw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lae2_dgov"/><path class="ah8_uokdg"/><path class="nunhi4evw"/>`,
		"fallback": "energy-icons:price-down-20",
	});
}

export default Component;
