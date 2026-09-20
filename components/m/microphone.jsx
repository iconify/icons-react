import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tw0t82bkw.css';
import '../../css/s/s416hsbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tw0t82bkw"/><path class="s416hsbyv"/></g>`,
		"fallback": "mage:microphone",
	});
}

export default Component;
