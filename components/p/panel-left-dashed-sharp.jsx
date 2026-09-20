import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp8xcyb3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp8xcyb3p"/>`,
		"fallback": "keyline-icons:panel-left-dashed-sharp",
	});
}

export default Component;
