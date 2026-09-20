import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzwfzrb1h.css';
import '../../css/o/o8zygebcn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bzwfzrb1h"/><path class="o8zygebcn"/>`,
		"fallback": "streamline-flex:store-1-solid",
	});
}

export default Component;
