import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx9blzb3a.css';
import '../../css/i/iabrmvfcy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx9blzb3a"/><path class="iabrmvfcy"/>`,
		"fallback": "gis:search-globe",
	});
}

export default Component;
