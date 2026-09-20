import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xasi82-5c.css';
import '../../css/s/snp36ebqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xasi82-5c"/><path class="snp36ebqx"/></g>`,
		"fallback": "tabler:lollipop-off",
	});
}

export default Component;
