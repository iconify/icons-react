import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juz-jcb_p.css';
import '../../css/v/vbotk2bgu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juz-jcb_p"/><path class="vbotk2bgu"/>`,
		"fallback": "energy-icons:noise-reduction-20",
	});
}

export default Component;
