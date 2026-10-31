import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-iczrbge.css';
import '../../css/m/mz2dbkb5p.css';
import '../../css/s/svve6qvgh.css';
import '../../css/g/g5f60rbdn.css';
import '../../css/c/cyrdvd-pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v-iczrbge wm-shadow"/><path class="mz2dbkb5p"/><path class="svve6qvgh"/><path class="g5f60rbdn"/><path class="cyrdvd-pk"/></g>`,
		"fallback": "withicons-retro:ship",
	});
}

export default Component;
