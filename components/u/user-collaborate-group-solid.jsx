import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5h0hrbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d5h0hrbaf"/>`,
		"fallback": "streamline-sharp:user-collaborate-group-solid",
	});
}

export default Component;
