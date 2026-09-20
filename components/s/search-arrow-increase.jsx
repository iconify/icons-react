import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jx69f4-uk.css';
import '../../css/v/vo37byb_e.css';
import '../../css/n/nkw6p-bju.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jx69f4-uk"/><path class="vo37byb_e"/><path class="nkw6p-bju"/></g>`,
		"fallback": "streamline-flex:search-arrow-increase",
	});
}

export default Component;
