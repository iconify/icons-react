import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/l/lh_k01j4o.css';
import '../../css/f/fjfmq7bqz.css';
import '../../css/l/l358m5-ci.css';
import '../../css/k/kexjgsbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="lh_k01j4o"/><path class="fjfmq7bqz"/><path class="l358m5-ci"/><path class="kexjgsbht"/></g>`,
		"fallback": "streamline-sharp-color:roller-paintbrush",
	});
}

export default Component;
