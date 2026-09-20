import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4f2u68gr.css';
import '../../css/m/m0c4jrb5p.css';
import '../../css/v/v4bnoj-6z.css';
import '../../css/i/iturx2siu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4f2u68gr"/><path class="m0c4jrb5p"/><path class="v4bnoj-6z"/><path class="iturx2siu"/>`,
		"fallback": "uim:scenery",
	});
}

export default Component;
