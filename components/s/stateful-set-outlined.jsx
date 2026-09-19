import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azvt5ojhn.css';
import '../../css/s/s69j4pb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azvt5ojhn"/><path class="s69j4pb6w"/>`,
		"fallback": "eos-icons:stateful-set-outlined",
	});
}

export default Component;
