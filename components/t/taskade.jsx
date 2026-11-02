import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz3bflh8i.css';
import '../../css/c/ckbkazvdl.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m7kpprbdd.css';
import '../../css/b/b5rhc9t8c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="vz3bflh8i"/><circle class="ckbkazvdl"/><g class="d2kvgvbvc"><path class="m7kpprbdd"/><path class="b5rhc9t8c"/></g>`,
		"fallback": "thesvg-color:taskade",
	});
}

export default Component;
