import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf_46ablw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf_46ablw"/>`,
		"fallback": "streamline-color:radioactive-2-flat",
	});
}

export default Component;
