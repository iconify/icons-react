import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmo9ppb1i.css';
import '../../css/c/chggfvtub.css';
import '../../css/j/jp9jvzb3o.css';
import '../../css/j/jgoyljbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lmo9ppb1i"><path class="chggfvtub"/><path class="jp9jvzb3o"/><path class="jgoyljbra"/></g>`,
		"fallback": "streamline-ultimate-color:safety-flame-right",
	});
}

export default Component;
