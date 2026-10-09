import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxmhc0blm.css';
import '../../css/e/eirizwgnj.css';
import '../../css/q/qck7pccit.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxmhc0blm"/><path class="eirizwgnj"/><path class="qck7pccit"/>`,
		"fallback": "energy-icons:sort-alpha-20",
	});
}

export default Component;
