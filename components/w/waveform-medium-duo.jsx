import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a-1148mpe.css';
import '../../css/b/b-a73ib2o.css';
import '../../css/t/tjn3hjv3h.css';
import '../../css/b/bhfdfiahb.css';
import '../../css/r/r___6ybhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a-1148mpe"/><path class="b-a73ib2o"/><path class="tjn3hjv3h"/><path class="bhfdfiahb"/><path class="r___6ybhc"/></g>`,
		"fallback": "iconaut:waveform-medium-duo",
	});
}

export default Component;
