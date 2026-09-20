import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q62j8llre.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q62j8llre"/>`,
		"fallback": "streamline-color:sleep",
	});
}

export default Component;
