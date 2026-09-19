import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/o8v4jibvl.css';
import '../../css/v/va486t6yh.css';
import '../../css/f/f-gowhbok.css';
import '../../css/q/qdcg2ob_s.css';
import '../../css/e/ebehnraeu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="o8v4jibvl"/><path class="va486t6yh"/><path class="f-gowhbok"/><path class="qdcg2ob_s"/><path class="ebehnraeu"/></g>`,
		"fallback": "icon-park:leaves-one",
	});
}

export default Component;
