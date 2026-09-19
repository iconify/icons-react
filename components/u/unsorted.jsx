import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lghk2q9iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lghk2q9iw"/>`,
		"fallback": "grommet-icons:unsorted",
	});
}

export default Component;
