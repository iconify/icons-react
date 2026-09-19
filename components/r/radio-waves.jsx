import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shexgfo6g.css';
import '../../css/t/tvrpsqb8n.css';
import '../../css/q/qxtq60bcj.css';
import '../../css/t/twamd5bhj.css';
import '../../css/j/j7khqpb0t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="shexgfo6g"/><path class="tvrpsqb8n"/><path class="qxtq60bcj"/><path class="twamd5bhj"/><path class="j7khqpb0t"/>`,
		"fallback": "ion:radio-waves",
	});
}

export default Component;
