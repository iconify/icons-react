import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me5ba80yv.css';
import '../../css/h/h1qif3bnk.css';
import '../../css/h/hifagnbxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="me5ba80yv"><path class="h1qif3bnk"/><path class="hifagnbxz"/></g>`,
		"fallback": "streamline-plump-color:scissors",
	});
}

export default Component;
