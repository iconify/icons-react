import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w42m25myi.css';
import '../../css/j/ja3b1ebtx.css';
import '../../css/m/mus_-9wcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w42m25myi"/><path class="ja3b1ebtx"/><path class="mus_-9wcl"/></g>`,
		"fallback": "lucide:train-front-tunnel",
	});
}

export default Component;
