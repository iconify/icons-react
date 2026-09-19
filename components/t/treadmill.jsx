import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqznn1ydc.css';
import '../../css/n/npytd8b-t.css';
import '../../css/j/jp5a_pbwx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSRzZve6x"><g class="wqznn1ydc"><path class="npytd8b-t"/><path class="jp5a_pbwx"/></g></mask></defs><path mask="url(#SVGSRzZve6x)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:treadmill",
	});
}

export default Component;
