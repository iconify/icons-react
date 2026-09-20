import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmejzn51m.css';
import '../../css/x/xc7m02d-s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmejzn51m"/><path class="ouiIcon__fillSecondary xc7m02d-s"/>`,
		"fallback": "oui:ml-classification-job",
	});
}

export default Component;
