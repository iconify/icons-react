import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohpn1fdmc.css';
import '../../css/z/zfhnnn14l.css';
import '../../css/l/l-8851zpj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohpn1fdmc"/><path class="zfhnnn14l"/><path class="l-8851zpj"/>`,
		"fallback": "energy-icons:pumped-hydro-48-bold",
	});
}

export default Component;
