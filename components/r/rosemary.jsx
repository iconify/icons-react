import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqsohmzgt.css';
import '../../css/p/pb4gmv60s.css';
import '../../css/m/millydbar.css';
import '../../css/h/hdqko0boa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqsohmzgt"/><path class="pb4gmv60s"/><path class="millydbar"/><path class="hdqko0boa"/>`,
		"fallback": "iconito:rosemary",
	});
}

export default Component;
