import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gunf1bbcg.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gunf1bbcg"/>`,
		"fallback": "websymbol:vkontakte-rect",
	});
}

export default Component;
