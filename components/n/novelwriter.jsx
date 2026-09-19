import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_3tzc3zp.css';
import '../../css/s/szf5qrbdc.css';
import '../../css/u/ud4iudbrz.css';
import '../../css/y/y3b9nlbqo.css';
import '../../css/m/m47cu8x2g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_3tzc3zp"/><path class="szf5qrbdc"/><path class="ud4iudbrz"/><path class="y3b9nlbqo"/><path class="m47cu8x2g"/>`,
		"fallback": "devicon:novelwriter",
	});
}

export default Component;
