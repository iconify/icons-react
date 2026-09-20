import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kkb823fnn.css';
import '../../css/a/ayqu4bc6c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kkb823fnn"/><path class="ayqu4bc6c"/></g>`,
		"fallback": "streamline-ultimate:vegetable-onion",
	});
}

export default Component;
