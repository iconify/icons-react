import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae8cvcbjo.css';
import '../../css/z/zdxltopzc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae8cvcbjo"/><path class="zdxltopzc"/>`,
		"fallback": "devicon:openstack-wordmark",
	});
}

export default Component;
