import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkmtk4g5n.css';
import '../../css/u/ua8zcubsn.css';
import '../../css/n/nehoj0scz.css';
import '../../css/y/y-v3s9jmp.css';
import '../../css/g/g84rd92ag.css';
import '../../css/d/dqa-5t1qq.css';
import '../../css/s/sazo061fo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkmtk4g5n"/><path class="ua8zcubsn"/><path class="nehoj0scz"/><path class="y-v3s9jmp"/><path class="g84rd92ag"/><path class="dqa-5t1qq"/><path class="sazo061fo"/>`,
		"fallback": "selfhst:pigeonpod-dark",
	});
}

export default Component;
