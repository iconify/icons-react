import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skwvgiyqj.css';
import '../../css/g/gnxlviovw.css';
import '../../css/z/zuksgrtbn.css';
import '../../css/t/t5w0wyb4c.css';
import '../../css/x/xht0c85vp.css';
import '../../css/z/zkvel22sc.css';
import '../../css/o/ob_i4538a.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skwvgiyqj"/><path class="gnxlviovw"/><path class="zuksgrtbn"/><path class="t5w0wyb4c"/><path class="xht0c85vp"/><path class="zkvel22sc"/><path class="ob_i4538a"/>`,
		"fallback": "devicon:nats",
	});
}

export default Component;
