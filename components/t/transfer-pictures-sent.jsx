import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsoddbbnl.css';
import '../../css/w/w-6tn9btk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsoddbbnl"/><path class="w-6tn9btk"/>`,
		"fallback": "streamline-freehand:transfer-pictures-sent",
	});
}

export default Component;
