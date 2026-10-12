import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pedr4_bjp.css';
import '../../css/f/f6h5kcc6e.css';
import '../../css/f/fw_ltzhjf.css';
import '../../css/i/iztk93-oh.css';
import '../../css/f/fq2ob0irn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pedr4_bjp"/><path class="f6h5kcc6e"/><path class="fw_ltzhjf"/><path class="iztk93-oh"/><path class="fq2ob0irn"/>`,
		"fallback": "energy-icons:snail-48-bold",
	});
}

export default Component;
