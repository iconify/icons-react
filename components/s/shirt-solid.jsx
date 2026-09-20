import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkcc6b92k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tkcc6b92k"/>`,
		"fallback": "streamline-flex:shirt-solid",
	});
}

export default Component;
