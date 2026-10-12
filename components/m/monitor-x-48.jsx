import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9mi-m0jn.css';
import '../../css/a/azjk1obih.css';
import '../../css/k/kng-rnbst.css';
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
		"content": `<path class="a9mi-m0jn"/><path class="azjk1obih"/><path class="kng-rnbst"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:monitor-x-48",
	});
}

export default Component;
