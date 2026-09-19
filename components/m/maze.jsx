import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sba_tzbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sba_tzbcg"/>`,
		"fallback": "gg:maze",
	});
}

export default Component;
