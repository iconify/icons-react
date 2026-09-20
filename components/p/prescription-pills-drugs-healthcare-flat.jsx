import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dol_h130o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dol_h130o"/>`,
		"fallback": "streamline-sharp-color:prescription-pills-drugs-healthcare-flat",
	});
}

export default Component;
