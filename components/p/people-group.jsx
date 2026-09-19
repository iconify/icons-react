import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/y/y-px61uke.css';
import '../../css/k/k45hr2bcn.css';
import '../../css/d/d08trebzr.css';
import '../../css/i/i5pb2cb6i.css';
import '../../css/t/t02h6lo4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="y-px61uke"/><circle class="k45hr2bcn"/><circle class="d08trebzr"/><circle class="i5pb2cb6i"/><path class="t02h6lo4o"/></g>`,
		"fallback": "akar-icons:people-group",
	});
}

export default Component;
