import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tmz70m34b.css';
import '../../css/n/n_chcwnjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tmz70m34b"/><path class="n_chcwnjt"/></g>`,
		"fallback": "streamline-ultimate:phone-retro-1",
	});
}

export default Component;
