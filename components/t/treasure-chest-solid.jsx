import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfmsc6ufm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qfmsc6ufm"/>`,
		"fallback": "streamline-flex:treasure-chest-solid",
	});
}

export default Component;
