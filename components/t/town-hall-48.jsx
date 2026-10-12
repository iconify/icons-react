import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prf_67usu.css';
import '../../css/k/k1wv7cb9q.css';
import '../../css/v/vtmw5etbw.css';
import '../../css/k/krjae8bbw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prf_67usu"/><path class="k1wv7cb9q"/><path class="vtmw5etbw"/><path class="krjae8bbw"/>`,
		"fallback": "energy-icons:town-hall-48",
	});
}

export default Component;
