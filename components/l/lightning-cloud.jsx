import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iuo1j15dv.css';
import '../../css/k/kh8j8mcrz.css';
import '../../css/f/fr_cepbha.css';
import '../../css/j/jxtx6fbin.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="iuo1j15dv"/><path class="kh8j8mcrz"/><path class="fr_cepbha"/><path class="jxtx6fbin"/></g>`,
		"fallback": "streamline-plump-color:lightning-cloud",
	});
}

export default Component;
