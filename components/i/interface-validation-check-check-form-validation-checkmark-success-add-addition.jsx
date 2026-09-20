import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmco-5kri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmco-5kri"/>`,
		"fallback": "streamline:interface-validation-check-check-form-validation-checkmark-success-add-addition",
	});
}

export default Component;
