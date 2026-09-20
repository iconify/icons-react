import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-ka_fbxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-ka_fbxm"/>`,
		"fallback": "streamline-flex:table-lamp-2-remix",
	});
}

export default Component;
