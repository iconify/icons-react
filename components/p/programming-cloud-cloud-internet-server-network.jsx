import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjzoe0bpe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjzoe0bpe"/>`,
		"fallback": "streamline:programming-cloud-cloud-internet-server-network",
	});
}

export default Component;
