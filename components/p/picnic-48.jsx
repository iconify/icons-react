import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqbx70bbt.css';
import '../../css/w/wvdczzbrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqbx70bbt"/><path class="wvdczzbrq"/>`,
		"fallback": "energy-icons:picnic-48",
	});
}

export default Component;
