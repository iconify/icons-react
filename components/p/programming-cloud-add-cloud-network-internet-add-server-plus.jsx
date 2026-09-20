import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aysq2l6vm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aysq2l6vm"/>`,
		"fallback": "streamline:programming-cloud-add-cloud-network-internet-add-server-plus",
	});
}

export default Component;
