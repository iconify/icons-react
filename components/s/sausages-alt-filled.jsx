import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxt1kcc0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jxt1kcc0f"/>`,
		"fallback": "griddy-icons:sausages-alt-filled",
	});
}

export default Component;
