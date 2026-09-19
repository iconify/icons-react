import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnzt_ubit.css';
import '../../css/c/c435is_7m.css';
import '../../css/m/m42cvdv3o.css';
import '../../css/f/f18qcjqug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnzt_ubit"/><path class="c435is_7m"/><path class="m42cvdv3o"/><circle class="f18qcjqug"/>`,
		"fallback": "fxemoji:microscope",
	});
}

export default Component;
