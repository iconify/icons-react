import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jq0yvabzs.css';
import '../../css/u/ura9qubce.css';
import '../../css/u/ufqapwbyp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jq0yvabzs"/><path class="ura9qubce"/><path class="ufqapwbyp"/>`,
		"fallback": "energy-icons:letter-spacing-20",
	});
}

export default Component;
