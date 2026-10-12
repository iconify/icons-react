import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn6sw826p.css';
import '../../css/g/goglxpbft.css';
import '../../css/y/y1_hjm1gj.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn6sw826p"/><path class="goglxpbft"/><path class="y1_hjm1gj"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:substation-x-48",
	});
}

export default Component;
