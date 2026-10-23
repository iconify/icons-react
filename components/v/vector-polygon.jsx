import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfto5zudc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfto5zudc"/>`,
		"fallback": "vadivam:vector-polygon",
	});
}

export default Component;
