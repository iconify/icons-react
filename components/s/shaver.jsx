import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/e2w5edbxq.css';
import '../../css/t/tyi7s5b9y.css';
import '../../css/b/bydi6pbak.css';
import '../../css/i/it3lebcor.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGqzZYu2uI"><g class="s9cl3zbei"><path class="e2w5edbxq"/><path class="tyi7s5b9y"/><path class="bydi6pbak"/><path class="it3lebcor"/></g></mask></defs><path mask="url(#SVGqzZYu2uI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shaver",
	});
}

export default Component;
