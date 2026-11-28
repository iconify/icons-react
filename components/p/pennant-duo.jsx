import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp75s3bpj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sggxujywz.css';
import '../../css/t/tod053bcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp75s3bpj secondary"/><g class="dt0cm9dhy primary"><path class="sggxujywz"/><path class="tod053bcv"/></g>`,
		"fallback": "iconaut:pennant-duo",
	});
}

export default Component;
