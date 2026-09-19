import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g-jwhsbbd.css';
import '../../css/m/mbe_9obgv.css';
import '../../css/i/ip-v7iiri.css';
import '../../css/t/tirykcc9x.css';
import '../../css/u/uxytbz-sf.css';
import '../../css/e/ej3qhsb5b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="g-jwhsbbd"/><path class="mbe_9obgv"/><path class="ip-v7iiri"/><path class="tirykcc9x"/><path class="uxytbz-sf"/><path class="ej3qhsb5b"/></g>`,
		"fallback": "icon-park:reverse-lens-one",
	});
}

export default Component;
