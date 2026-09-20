import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7tonybzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l7tonybzg"/>`,
		"fallback": "streamline-sharp-color:radioactive-1-flat",
	});
}

export default Component;
