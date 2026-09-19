import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onyqr8g1f.css';
import '../../css/f/f80vq2bep.css';
import '../../css/i/iiw_n9bdd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onyqr8g1f"/><path class="f80vq2bep"/><path class="iiw_n9bdd"/>`,
		"fallback": "flag:ru-1x1",
	});
}

export default Component;
