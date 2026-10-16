import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg0u5tbyf.css';
import '../../css/q/qnjki0hlv.css';
import '../../css/j/jf1_jq5jw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg0u5tbyf"/><path class="qnjki0hlv"/><path class="jf1_jq5jw"/>`,
		"fallback": "energy-icons:laser-level-20",
	});
}

export default Component;
