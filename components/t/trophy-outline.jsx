import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd2p9zlpz.css';
import '../../css/n/n2bq_64ql.css';
import '../../css/r/rhbj1tb0k.css';
import '../../css/h/h30wgibno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dd2p9zlpz"/><path clip-rule="evenodd" class="n2bq_64ql"/><path clip-rule="evenodd" class="rhbj1tb0k"/><path clip-rule="evenodd" class="h30wgibno"/>`,
		"fallback": "cuida:trophy-outline",
	});
}

export default Component;
