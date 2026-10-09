import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa0z9ccux.css';
import '../../css/c/cdardccke.css';
import '../../css/t/tkbzu4bpe.css';
import '../../css/w/wujjhtesw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa0z9ccux"/><path class="cdardccke"/><path class="tkbzu4bpe"/><path class="wujjhtesw"/>`,
		"fallback": "energy-icons:sim-card-20",
	});
}

export default Component;
