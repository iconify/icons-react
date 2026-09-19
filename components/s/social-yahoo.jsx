import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcrdvrkpy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qcrdvrkpy"/>`,
		"fallback": "foundation:social-yahoo",
	});
}

export default Component;
