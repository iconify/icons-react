import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upy-ybcph.css';
import '../../css/i/iw2o35bsv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upy-ybcph"/><path class="iw2o35bsv"/>`,
		"fallback": "energy-icons:upload-48",
	});
}

export default Component;
