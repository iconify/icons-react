import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5dn8xbwr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s5dn8xbwr"/>`,
		"fallback": "streamline:virus-antivirus-solid",
	});
}

export default Component;
