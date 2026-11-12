import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo6tgw96g.css';
import '../../css/a/a5hkwzb3n.css';
import '../../css/r/renh8_kgy.css';
import '../../css/b/bf-kbob7n.css';
import '../../css/s/saw-75b7p.css';
import '../../css/i/iu8_vibja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="jo6tgw96g"/><path class="a5hkwzb3n"/><path class="renh8_kgy"/><path class="bf-kbob7n"/><path class="saw-75b7p"/><path class="iu8_vibja"/>`,
		"fallback": "selfhst:openbao",
	});
}

export default Component;
