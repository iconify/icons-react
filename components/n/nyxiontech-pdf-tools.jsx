import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucomdgbea.css';
import '../../css/m/m9uodidsu.css';
import '../../css/w/wx7rgmjkw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ucomdgbea"/><path class="m9uodidsu"/><circle class="wx7rgmjkw"/>`,
		"fallback": "selfhst:nyxiontech-pdf-tools",
	});
}

export default Component;
