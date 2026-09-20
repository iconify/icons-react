import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhidwc.css';
import '../../css/u/ufposl.css';
import '../../css/m/m9pw2i.css';
import '../../css/u/ubmjts.css';
import '../../css/e/eyuyvm.css';
import '../../css/b/bmy0qq.css';
import '../../css/s/so-from-56.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhidwc ufposl"/><path class="m9pw2i ubmjts ufposl"/><path class="eyuyvm m9pw2i ufposl"/><path class="bmy0qq m9pw2i ufposl"/>`,
		"fallback": "line-md:moon-alt",
	});
}

export default Component;
