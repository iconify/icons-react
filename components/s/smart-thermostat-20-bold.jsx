import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/i/iz38uxbae.css';
import '../../css/b/bzm25wbfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="iz38uxbae"/><path class="bzm25wbfj"/>`,
		"fallback": "energy-icons:smart-thermostat-20-bold",
	});
}

export default Component;
