import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzv_u_b-g.css';
import '../../css/n/noehlf0bk.css';
import '../../css/f/fk0yjerem.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzv_u_b-g"/><circle class="noehlf0bk"/><path class="fk0yjerem"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:thin-client-line",
	});
}

export default Component;
