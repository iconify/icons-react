import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guw_mk73j.css';
import '../../css/i/ilmsi6bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guw_mk73j"/><path clip-rule="evenodd" class="ilmsi6bmd"/>`,
		"fallback": "bitcoin-icons:question-filled",
	});
}

export default Component;
