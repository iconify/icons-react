import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd7besbrf.css';
import '../../css/k/kgg90w3zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd7besbrf"/><path class="kgg90w3zy"/>`,
		"fallback": "tdesign:map-information-filled",
	});
}

export default Component;
