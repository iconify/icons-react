import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etlms99xu.css';
import '../../css/y/ytmexvb4a.css';
import '../../css/w/wi_73xbfb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etlms99xu"/><path class="ytmexvb4a"/><path class="wi_73xbfb"/>`,
		"fallback": "energy-icons:marker-biomass-48-bold",
	});
}

export default Component;
