import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uij4f5b-x.css';
import '../../css/f/f7f__c0js.css';
import '../../css/v/vjilnacka.css';

const viewBox = {"width":126,"height":31};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uij4f5b-x"><path class="f7f__c0js"/><path class="vjilnacka"/></g>`,
		"fallback": "thesvg-color:pocus",
	});
}

export default Component;
