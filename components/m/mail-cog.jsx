import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xn1-ixb9c.css';
import '../../css/m/m8exctsgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xn1-ixb9c"/><path class="m8exctsgb"/></g>`,
		"fallback": "tabler:mail-cog",
	});
}

export default Component;
