import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0m40jtsp.css';
import '../../css/t/tjes3mbwb.css';
import '../../css/p/pae_c0_fk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0m40jtsp"/><path class="tjes3mbwb"/><path class="pae_c0_fk"/>`,
		"fallback": "ion:ios-bus",
	});
}

export default Component;
