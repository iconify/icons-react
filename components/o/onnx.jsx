import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/havvtcxsj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="havvtcxsj"/>`,
		"fallback": "material-icon-theme:onnx",
	});
}

export default Component;
