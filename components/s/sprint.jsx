import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tecq33bxr.css';
import '../../css/k/krnx4irco.css';
import '../../css/q/qndvb9ebg.css';
import '../../css/a/a2lf980sv.css';

const viewBox = {"width":294.399,"height":121.975,"top":-6.166};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tecq33bxr"/><path class="krnx4irco"/><path class="qndvb9ebg"/><path class="a2lf980sv"/>`,
		"fallback": "thesvg-color:sprint",
	});
}

export default Component;
