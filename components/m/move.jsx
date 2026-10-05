import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/dx0h12ftt.css';
import '../../css/f/fdrjbherd.css';
import '../../css/d/dsd574bem.css';
import '../../css/q/qntv7ub-s.css';
import '../../css/n/ndya8_8ll.css';
import '../../css/j/jfge5sbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="dx0h12ftt"/><path class="fdrjbherd"/><path class="dsd574bem"/><path class="qntv7ub-s"/><path class="ndya8_8ll"/><path class="jfge5sbwt"/></g>`,
		"fallback": "matita:move",
	});
}

export default Component;
