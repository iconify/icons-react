import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miqaklw4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miqaklw4n"/>`,
		"fallback": "tabler:layout-align-middle-filled",
	});
}

export default Component;
