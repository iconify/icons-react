import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvfq3_bpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvfq3_bpj"/>`,
		"fallback": "roentgen:probe",
	});
}

export default Component;
