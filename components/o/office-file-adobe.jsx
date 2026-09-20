import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ohfrcir3t.css';
import '../../css/q/qkhv3sbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ohfrcir3t"/><path class="qkhv3sbxh"/></g>`,
		"fallback": "streamline-ultimate:office-file-adobe",
	});
}

export default Component;
