import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9mgzabny.css';
import '../../css/p/p0dsglbia.css';
import '../../css/u/uj8cponlm.css';
import '../../css/u/u2ephhbrf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9mgzabny"/><path class="p0dsglbia"/><path class="uj8cponlm"/><path class="u2ephhbrf"/>`,
		"fallback": "energy-icons:vacuum-20",
	});
}

export default Component;
