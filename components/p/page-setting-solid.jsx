import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjj9gwb3c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cjj9gwb3c"/>`,
		"fallback": "streamline-flex:page-setting-solid",
	});
}

export default Component;
