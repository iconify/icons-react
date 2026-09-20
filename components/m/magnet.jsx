import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbtxlg-vi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbtxlg-vi"/>`,
		"fallback": "tabler:magnet",
	});
}

export default Component;
