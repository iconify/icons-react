import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw--3tn7p.css';
import '../../css/u/ueef18k6a.css';
import '../../css/s/shu3xdl9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cw--3tn7p"><path class="ueef18k6a"/><circle class="shu3xdl9q"/></g>`,
		"fallback": "thesvg-color:slash",
	});
}

export default Component;
