import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyq58rb7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hyq58rb7g"/>`,
		"fallback": "streamline-flex:table-solid",
	});
}

export default Component;
