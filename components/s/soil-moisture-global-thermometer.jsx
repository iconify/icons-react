import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znrbtj4ko.css';
import '../../css/w/wuhkh627w.css';
import '../../css/j/jwnqwzbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znrbtj4ko"/><path class="wuhkh627w"/><path class="jwnqwzbdk"/></g>`,
		"fallback": "andrsrxn:soil-moisture-global-thermometer",
	});
}

export default Component;
