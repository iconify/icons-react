import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vcwlsol0u.css';
import '../../css/k/k9-mltwej.css';
import '../../css/g/g9atgrb0m.css';
import '../../css/c/c7tzzgbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vcwlsol0u"/><path class="k9-mltwej"/><path class="g9atgrb0m"/><path class="c7tzzgbem"/></g>`,
		"fallback": "streamline-ultimate-color:single-neutral-actions-edit-2",
	});
}

export default Component;
