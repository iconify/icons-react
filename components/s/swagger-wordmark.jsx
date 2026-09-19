import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfq4wgtpb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfq4wgtpb"/>`,
		"fallback": "devicon-plain:swagger-wordmark",
	});
}

export default Component;
