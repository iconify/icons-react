import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/iluvl1bch.css';
import '../../css/t/tyglhd7dw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="iluvl1bch"/><path class="tyglhd7dw"/></g>`,
		"fallback": "matita:mail",
	});
}

export default Component;
