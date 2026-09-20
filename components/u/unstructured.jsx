import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg8495bbv.css';
import '../../css/z/zdj1fdckx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg8495bbv"/><path clip-rule="evenodd" class="zdj1fdckx"/>`,
		"fallback": "thesvg-color:unstructured",
	});
}

export default Component;
