import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5j4ppxlp.css';
import '../../css/h/hwyi-sb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5j4ppxlp"/><path class="hwyi-sb1a"/>`,
		"fallback": "streamline-ultimate:phone-type-bold",
	});
}

export default Component;
