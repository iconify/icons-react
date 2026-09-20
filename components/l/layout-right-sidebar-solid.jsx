import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kc7-hhdgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kc7-hhdgt"/>`,
		"fallback": "streamline-sharp:layout-right-sidebar-solid",
	});
}

export default Component;
